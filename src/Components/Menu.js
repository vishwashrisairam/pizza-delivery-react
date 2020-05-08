import React,{useEffect } from 'react';
import {Container, Card, Button, ButtonGroup, CardDeck,Pagination,Dropdown,Row,Col,InputGroup,FormControl,Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Loader from './Loader';

import fetchProductsAction, {gotoPageAction,filterAction,setSearchKeyAction,searchAction,editProductAction,deleteProductAction,hideErrorPopup} from '../store/actions/productAction';
import {addToCartAction} from '../store/actions/cartActions'
import pizza2 from '../assests/images/pizza-2.jpg';

import '../index.css';

const API_HOST = 'http://localhost:3001/'; 

const Menu = (props) =>{
    console.log('log products',props.products)

    const fetchProducts = () => props.fetchProducts();
    useEffect(() => {
        console.log('fetch products')
        fetchProducts();  
    }, []);

    

    let paginationItems = []
    for(let i=1; i<= props.numPages;i++){
        paginationItems.push(
            <Pagination.Item key={i} active={i === props.activePage} onClick={()=>props.gotoPage(i)}>
              {i}
            </Pagination.Item>,
          );
    }

    

    return (
        <Container>
        {props.foundError && 
            <Alert variant="danger" onClose={() => props.dismissError()} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {props.errorMessage}
                </p>
            </Alert>
        }
        <Row className="heading">
            <Col lg="4" md="4" sm="6">
               
                <Dropdown>
                    <span>Filter by:</span>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>props.filterBy('all',props.allProducts)}>All</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.filterBy('pizza',props.allProducts)}>Pizzas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.filterBy('pasta',props.allProducts)}>Pastas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.filterBy('sides',props.allProducts)}>Sides</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.filterBy('drink',props.allProducts)}>Beverages</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.filterBy('sauce',props.allProducts)}>Sauce</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col lg="4" md="4" sm="6">
            <InputGroup className="mb-3 pull-left">
                <FormControl
                    placeholder="Search"
                    name="search"
                    aria-label="search"
                    value={props.searchKey}
                    onChange={(e)=>props.setSearchKey(e.target.value)}
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-primary" onClick={()=>props.search(props.searchKey,props.allProducts)}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            </Col>
            <Col lg="4" md="4" sm="12">
                {props.isAdmin && 
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="warning" href="/addProduct">Add new Product</Button>
                    </ButtonGroup>
                }
            </Col>

        </Row>  
           <Row>
           {props.isLoading && <Loader/>  }
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}> 
            <br />
            {
                props.currentPageItems.length === 0 ? <p> No product found</p> :
                props.currentPageItems.map((product, index) => (
                    <div key={index}>
                       
                        <Card style={{ width: '18rem', flex: 1 }} >
                            <Card.Img variant="top" src={
                                product.productImage ? API_HOST+ product.productImage: 
                                pizza2} />
                        <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>
                                    {product.description}
                                </Card.Text>
                                {
                                    props.isAdmin && 
                                    <ButtonGroup aria-label="Basic example">
                                        <Link to='/addProduct'>
                                            <Button variant="primary" onClick={()=> props.editProduct(product._id)}>Edit</Button>
                                        </Link>
                                        <Button variant="danger" onClick={()=>props.deleteProduct(product._id)}>Delete</Button>
                                    </ButtonGroup>
                                }
                                
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="success" onClick={()=>props.addToCart(product,props.cart)}>Add to Cart</Button>
                                </ButtonGroup>
                        </Card.Body>
                            </Card>

                    </div>
                    ))
                }
             
            </CardDeck>
            </Row>
            <br/>
            <Pagination>{paginationItems} </Pagination>
        </Container>
            );
}
/*
const componentDidMount = (props) => {
    return props.fetchProducts
}
*/


const mapStateToProps = state => {
    let activePage = state.products.activePage;
    let itemsPerPage = state.products.itemsPerPage;
    let currentPageProducts  = state.products.items.slice((activePage-1)*itemsPerPage,
                            Math.min(state.products.items.length,activePage*itemsPerPage))
    
    let numPages = Math.ceil(state.products.items.length/state.products.itemsPerPage)                        
    // console.log('msp',state)
    // let currPageItems = state.products.items.slice()

    return {
        allProducts: state.products.allItems,
        products: state.products.items,
        numPages : numPages,
        activePage : state.products.activePage,
        itemsPerPage:state.products.itemsPerPage,
        searchKey: state.products.searchKey,
        currentPageItems : currentPageProducts,
        isAdmin:state.user.isAdmin,
        cart:state.cart.items,
        isLoading : state.products.loading,
        foundError : state.products.error,
        errorMessage: state.products.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => { dispatch(fetchProductsAction) },
        gotoPage: (index) => {dispatch(gotoPageAction(index))},
        filterBy : (category,items) => dispatch(filterAction(category,items)),
        setSearchKey: (value) => dispatch(setSearchKeyAction(value)),
        search : (key,items) => dispatch(searchAction(key,items)), 
        addToCart :(item,cart) => dispatch(addToCartAction(item,cart)),
        editProduct: (id) => dispatch(editProductAction(id)),
        deleteProduct: (id) => dispatch(deleteProductAction(id)),
        dismissError: () => dispatch(hideErrorPopup()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);