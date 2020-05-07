import React from 'react';
import { Card, Button, ButtonGroup, CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux';
import fetchProductsAction from '../store/actions/productAction'
import pizza2 from '../assests/images/pizza-2.jpg';




const Menu = (props) =>{
    console.log('log products',props.products)
    return (
        <div>
        <h1>Menu Page</h1>
            Products: <button onClick={props.fetchProducts}> Fetch Products</button>
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            <br />
            {
                props.products.length === 0 ? <p> No product found</p> :
                props.products.map((product, index) => (
                    <div>
                        
                        <Card style={{ width: '18rem', flex: 1 }} key={index}>
                            <Card.Img variant="top" src={pizza2} />
                        <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary">Edit</Button>
                                    <Button variant="secondary">delete</Button>
                                </ButtonGroup>
                        </Card.Body>
                            </Card>

                    </div>
                    ))
                }
              
            </CardDeck>
        </div>
            );
}
/*
const componentDidMount = (props) => {
    return props.fetchProducts
}
*/


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => { dispatch(fetchProductsAction) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);