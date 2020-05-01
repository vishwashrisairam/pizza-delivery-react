import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import './users.css';
import {togglePaymentDetailsFormAction,addPaymentAction} from './../../store/actions/userActions';
import {Modal,Button} from 'react-bootstrap';

const PaymentForm = (props) =>{
    console.log('pi',props.index)
    let iv={};
    if(props.index!==undefined){
        let paymentObj = props.user.payment[props.index]
        iv={
            paymentMode:'Credit Card',
            cardNumber:paymentObj.cardNumber,
            expirationDate:paymentObj.expirationDate,
            securityCode:paymentObj.securityCode,
            zip:paymentObj.zip,
            cardName:paymentObj.cardName
        }
    }else{
        iv={
            paymentMode:'Credit Card',
            cardNumber:'',
            expirationDate:'',
            securityCode:'',
            zip:'',
            cardName:''
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
                            paymentMode: Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            cardNumber:Yup.string().required("Requried").matches(/^\d{16}$/,"Enter 16 digits credit card number"),
                            expirationDate : Yup.string().required("Required").matches(/^\d{2}\/\d{2}$/,"Enter in mm/dd format"),
                            securityCode : Yup.string().required("Required").matches(/^\d{3,5}$/,"enter 3-5 digit cvv number"),
                            zip: Yup.string().required("Required").matches(/^[1-9]\d{4}$/,"Length 5 digits"),
                            cardName: Yup.string().required("Required").max(30,"Maximum 30 characters"),
                        })}
                        >
                        {formik => {
                             const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                             return (

                                <Modal show={props.show}>
                                    <Modal.Header>
                                    <Modal.Title>Add new Card</Modal.Title>
                                    </Modal.Header>  
                                <form onSubmit={handleSubmit}>
                                    
                                    <Modal.Body>
                                    <Row>
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
    console.log("Payment Form",state);
    return {
        user : state.user,
        index : state.user.payind
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save : (x) => dispatch(addPaymentAction(x)), 
        cancel : (val) => dispatch(togglePaymentDetailsFormAction(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentForm);