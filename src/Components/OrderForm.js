import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import '../index.css'

import {hideOrderFormAction,placeOrderAction} from './../store/actions/cartActions';
import {Modal,Button} from 'react-bootstrap';
const OrderForm = (props) =>{
    console.log('ai',props.index)
      
    return (
        <Container>            
            <Row>
                <Col> 
                    <Formik
                        initialValues={{
                            addressLine1:'',
                            addressLine2:'',
                            city:'',
                            state:'',
                            zip:'',
                            country:'',
                            paymentMode:'Credit Card',
                            cardNumber:'',
                            expirationDate:'',
                            securityCode:'',
                            zipCode:'',
                            cardName:''
                        }}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log("Saving details ",values)
                            setSubmitting(false);

                            let placeOrderRequest={
                                userId:props.user._id,
                                name:props.user.firstName + ' '+ props.user.lastName,
                                item:props.items,
                                orderAmount:props.amount,
                                deliveryAddress:{
                                    addressLine1:values.addressLine1,
                                    addressLine2:values.addressLine2,
                                    city:values.city,
                                    state:values.state,
                                    zip:values.zip,
                                    country:values.country,
                                },
                                paymentDetails:{
                                    paymentMode:values.paymentMode,
                                    cardNumber:values.cardNumber,
                                    cardName:values.cardName,
                                    expirationDate:values.expirationDate
                                },
                                status:"Order Placed"
                            }
                            console.log('place order request',placeOrderRequest)
                            props.placeOrder(placeOrderRequest);

                        }}
                        validationSchema={Yup.object().shape({
                            addressLine1: Yup.string().required("Required").max(50,"Maximum 50 characters"),
                            addressLine2:Yup.string().required("Requried").max(50,"Maximum 50 characters"),
                            city : Yup.string().required("Required").max(30,"Maximum 30 characters"),
                            state : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            zip: Yup.string().required("Required").matches(/^[1-9]\d{4}$/,"Length 5 digits"),
                            country: Yup.string().required("Required").max(30,"Maximum 30 characters"),
                            paymentMode: Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            cardNumber:Yup.string().required("Requried").matches(/^\d{16}$/,"Enter 16 digits credit card number"),
                            expirationDate : Yup.string().required("Required").matches(/^\d{2}\/\d{2}$/,"Enter in mm/dd format"),
                            securityCode : Yup.string().required("Required").matches(/^\d{3,5}$/,"enter 3-5 digit cvv number"),
                            zipCode: Yup.string().required("Required").matches(/^[1-9]\d{4}$/,"Length 5 digits"),
                            cardName: Yup.string().required("Required").max(30,"Maximum 30 characters"),
                        })}
                        >
                        {formik => {
                             const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                             return (

                                
                                <form onSubmit={handleSubmit}>
                                    
                                    <Row><h3>Delivery Address</h3></Row>
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

                                    <Row><h3>Payment Details</h3></Row><Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="paymentMode">Payment Mode:</label>
                                        <input 
                                            name = "paymentMode"
                                            type="text"
                                            placeholder="Payment Mode"
                                            value = {values.paymentMode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.paymentMode && touched.paymentMode ? "errorField":"")}
                                            disabled
                                        />

                                        {errors.paymentMode && touched.paymentMode && (
                                            <div className="error">{errors.paymentMode}</div>
                                        )}
                                    </Col>
                                   
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="CreditCardNumber">Credit Card Number</label>
                                        <input 
                                            name = "cardNumber"
                                            type="text"
                                            placeholder="Credit Card Number"
                                            value = {values.cardNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.cardNumber && touched.cardNumber ? "errorField":"")}
                                        />

                                        {errors.cardNumber && touched.cardNumber && (
                                            <div className="error">{errors.cardNumber}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="expiry">Expiry Date</label>
                                        <input 
                                            name = "expirationDate"
                                            type="text"
                                            placeholder="MM/DD"
                                            value = {values.expirationDate}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.expirationDate && touched.expirationDate ? "errorField":"")}
                                        />

                                        {errors.expirationDate && touched.expirationDate && (
                                            <div className="error">{errors.expirationDate}</div>
                                        )}
                                    </Col>
                                   
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="securityCode">Security Code</label>
                                        <input 
                                            name = "securityCode"
                                            type="text"
                                            placeholder="Security Ocde"
                                            value = {values.securityCode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.securityCode && touched.securityCode ? "errorField":"")}
                                        />

                                        {errors.securityCode && touched.securityCode && (
                                            <div className="error">{errors.securityCode}</div>
                                        )}
                                    </Col>
                                    </Row>
                                
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="zip">Zip Code</label>
                                        <input 
                                            name = "zipCode"
                                            type="text"
                                            placeholder="Zip Code"
                                            value = {values.zipCode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.zipCode && touched.zipCode ? "errorField":"")}
                                        />

                                        {errors.zipCode && touched.zipCode && (
                                            <div className="error">{errors.zipCode}</div>
                                        )}
                                    </Col>
                                    
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="cardName">Card Name</label>
                                        <input 
                                            name = "cardName"
                                            type="text"
                                            placeholder="eg John Doe"
                                            value = {values.cardName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.cardName && touched.cardName ? "errorField":"")}
                                        />

                                        {errors.cardName && touched.cardName && (
                                            <div className="error">{errors.cardName}</div>
                                        )}
                                    </Col>
                                    </Row>

                                                
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={props.cancelOrder}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit" disabled={!(formik.isValid && formik.dirty) }>
                                        Place Order
                                    </Button>
                                    </Modal.Footer>
                                    
                                </form>
                               
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
       cancelOrder : () => dispatch(hideOrderFormAction()),
       placeOrder :(req) => dispatch(placeOrderAction(req))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderForm);