import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import './users.css';
import {toggleAddressFormAction,addNewAddressAction} from './../../store/actions/userActions';
import {Modal,Button} from 'react-bootstrap';
const AddressForm = (props) =>{
    console.log('ai',props.index)
    let iv={};
    if(props.index!==undefined){
        let address = props.user.address[props.index]
        iv={
            addressLine1:address.addressLine1,
            addressLine2:address.addressLine2,
            city:address.city,
            state:address.state,
            zip:address.zip,
            country:address.country
        }
    }else{
        iv={
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:'',
            zip:'',
            country:''
        }
    }
  
    return (
        <Container>            
            <Row>
                <Col> 
                    <Formik
                        initialValues={iv}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log("Saving details ",values)
                            setSubmitting(false);

                            props.save(values);

                        }}
                        validationSchema={Yup.object().shape({
                            addressLine1: Yup.string().required("Required").max(50,"Maximum 50 characters"),
                            addressLine2:Yup.string().required("Requried").max(50,"Maximum 50 characters"),
                            city : Yup.string().required("Required").max(30,"Maximum 30 characters"),
                            state : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            zip: Yup.string().required("Required").matches(/^[1-9]\d{4}$/,"Length 5 digits"),
                            country: Yup.string().required("Required").max(30,"Maximum 30 characters"),
                        })}
                        >
                        {formik => {
                             const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                             return (

                                <Modal show={props.show}>
                                    <Modal.Header>
                                    <Modal.Title>Add new Address</Modal.Title>
                                    </Modal.Header>  
                                <form onSubmit={handleSubmit}>
                                    
                                    <Modal.Body>
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="AddressLine1">Address Line 1:</label>
                                        <input 
                                            name = "addressLine1"
                                            type="text"
                                            placeholder="Address Line 1"
                                            value = {values.addressLine1}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.addressLine1 && touched.addressLine1 ? "errorField":"")}
                                        />

                                        {errors.addressLine1 && touched.addressLine1 && (
                                            <div className="error">{errors.addressLine1}</div>
                                        )}
                                    </Col>
                                    {/* Phone Number */}
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="AddressLine2">Address Line 2</label>
                                        <input 
                                            name = "addressLine2"
                                            type="text"
                                            placeholder="Address Line 2"
                                            value = {values.addressLine2}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.addressLine2 && touched.addressLine2 ? "errorField":"")}
                                        />

                                        {errors.addressLine2 && touched.addressLine2 && (
                                            <div className="error">{errors.addressLine2}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input 
                                            name = "city"
                                            type="text"
                                            placeholder="City"
                                            value = {values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.city && touched.city ? "errorField":"")}
                                        />

                                        {errors.city && touched.city && (
                                            <div className="error">{errors.city}</div>
                                        )}
                                    </Col>
                                   
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input 
                                            name = "state"
                                            type="text"
                                            placeholder="State"
                                            value = {values.state}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.state && touched.state ? "errorField":"")}
                                        />

                                        {errors.state && touched.state && (
                                            <div className="error">{errors.state}</div>
                                        )}
                                    </Col>
                                    </Row>
                                
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="zip">Zip Code</label>
                                        <input 
                                            name = "zip"
                                            type="text"
                                            placeholder="Zip Code"
                                            value = {values.zip}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.zip && touched.zip ? "errorField":"")}
                                        />

                                        {errors.zip && touched.zip && (
                                            <div className="error">{errors.zip}</div>
                                        )}
                                    </Col>
                                    
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input 
                                            name = "country"
                                            type="text"
                                            placeholder="Country"
                                            value = {values.country}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.country && touched.country ? "errorField":"")}
                                        />

                                        {errors.country && touched.country && (
                                            <div className="error">{errors.country}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    </Modal.Body>
                                                
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={()=>props.cancel(props.show)}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit" disabled={!(formik.isValid ) }>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                    
                                </form>
                                </Modal>
                             );
                        }}

                    </Formik>
                </Col>
                
            </Row>
        </Container>

    );
    
}

const mapStateToProps = state =>{
    console.log("Address Form",state);
    return {
        user : state.user,
        index : state.user.addind
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save : (x) => dispatch(addNewAddressAction(x)), 
        cancel : (val) => dispatch(toggleAddressFormAction(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressForm);