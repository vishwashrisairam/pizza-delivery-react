import React,{useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './users.css';
import Loader from '../Loader'
import {hideErrorPopup} from './../../store/actions/userActions';
import {addNewProductAction,resetEditProductAction,updateProductAction} from './../../store/actions/productAction';

const AdminAddProductForm = (props) =>{

useEffect(() => {    
    // returned function will be called on component unmount 
    return () => {
        props.resetEdit()
    }
    }, [])

console.log("IsAdmin?:",props.isAdmin);    
    
if(!props.isAdmin){ 
    return <Redirect to='/'/> 
}else{
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
            <Row>
                <Col lg="3"/>
                <Col>
                    {props.isEdit ? <h1>Edit Product</h1>  : <h1>Add a new Product</h1> }
                    
                    {props.isLoading && <Loader/>  }
                    <Formik
                        initialValues={props.iv}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log("Add new  product form",values)
                            setSubmitting(false);

                            let formData = new FormData();
                            formData.append('category',values.category)
                            formData.append('productName',values.name)
                            formData.append('description',values.description)
                            formData.append('price',values.price)
                            formData.append('pic',values.pic)

                            if(props.isEdit){
                                props.editProduct(props.isEdit,formData);
                            }else{
                                props.addProduct(formData);
                            }
                            

                        }}
                        validationSchema={Yup.object().shape({
                            category: Yup.string().required("Required"),
                            name : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            description : Yup.string().required("Required").max(200,"Maximum 200 characters"),
                            price:Yup.string().required("Requried").matches(/^(\d+(\.\d{1,2})?)$/,"x or x.d or x.dd"),
                            
                        })}
                        >
                        {formik => {
                             const {values,touched, errors, handleChange,handleBlur, handleSubmit,setFieldValue} = formik;

                             return (
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                   
                                    <Row className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <input 
                                            name = "category"
                                            type="text"
                                            placeholder="Pizza,Beverage,Sides,etc"
                                            value = {values.category}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.category && touched.category ? "errorField":"")}
                                        />

                                        {errors.category && touched.category && (
                                            <div className="error">{errors.category}</div>
                                        )}
                                    </Row>
                                    {/* Phone Number */}
                                    <Row className="form-group">
                                        <label htmlFor="name">Product Name</label>
                                        <input 
                                            name = "name"
                                            type="text"
                                            placeholder="Name"
                                            value = {values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.name && touched.name ? "errorField":"")}
                                        />

                                        {errors.name && touched.name && (
                                            <div className="error">{errors.name}</div>
                                        )}
                                    </Row>
                                    
                                    <Row className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea 
                                            name = "description"
                                            type="text"
                                            placeholder="describe your product"
                                            value = {values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.description && touched.description ? "errorField":"")}
                                        />

                                        {errors.description && touched.description && (
                                            <div className="error">{errors.description}</div>
                                        )}
                                    </Row>

                                    <Row className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input 
                                            name = "price"
                                            type="text"
                                            placeholder="e.g. $5"
                                            value = {values.price}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.price && touched.price ? "errorField":"")}
                                        />

                                        {errors.price && touched.price && (
                                            <div className="error">{errors.price}</div>
                                        )}
                                    </Row>
                                    
                                    <Row className="form-group">
                                        <label htmlFor="pic">Picture</label>
                                        <input 
                                            name = "pic"
                                            id="pic"
                                            type="file"
                                            placeholder=""
                                            //(e)=> {  setFieldValue("pic",e.currentTarget.files[0]) }
                                            onChange={(e)=> {  setFieldValue("pic",e.currentTarget.files[0])}}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.pic && touched.pic ? "errorField":"")}
                                        />

                                        {errors.pic && touched.pic && (
                                            <div className="error">{errors.pic}</div>
                                        )}
                                    </Row>
                                    

                                    {/* Submit buttons */}
                                    <Row className="form-group">
                                    
                                        <button type="submit" disabled={!(formik.isValid ) } className="btn btn-primary btn-lg">
                                            Add
                                        </button>
                                        
                                    </Row>

                                </form>
                             );
                        }}

                    </Formik>
                </Col>
                <Col lg="3"/>
            </Row>
        </Container>

    );
    }
}

const mapStateToProps = state =>{
    let initialValue = {category:'',name:'',description:'',price:'',pic:null}
    if(state.products.edit){
        let allItems = state.products.items 
        let currentItem = allItems.find(x=>x._id===state.products.edit)
        initialValue = {
            category:currentItem.category?currentItem.category:"",
            name:currentItem.productName?currentItem.productName:"",
            description:currentItem.description?currentItem.description:"",
            price:currentItem.price?currentItem.price:"",
            pic:currentItem.productImage
        }

    }
    return {
        isAdmin : state.user.isAdmin,
        isEdit : state.products.edit,
        iv:initialValue,
        isLoading : state.products.loading,
        foundError : state.products.error,
        errorMessage: state.products.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct : (x) => dispatch(addNewProductAction(x)), 
        editProduct : (id,x) => dispatch(updateProductAction(id,x)),
        dismissError: () => dispatch(hideErrorPopup()),
        resetEdit: () => dispatch(resetEditProductAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminAddProductForm);