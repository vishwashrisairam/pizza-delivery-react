import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import './users.css';
import {toggleProfileDetailsFormAction,updateProfileAction} from './../../store/actions/userActions';

const ProfileForm = (props) =>{
  
    return (
        <Container>
            <Row>
                <Col lg="3"/>
                <Col> 
                    <Formik
                        initialValues={{
                            email:props.user.email,
                            phoneNo:props.user.phoneNumber,
                            firstName:props.user.firstName,
                            lastName:props.user.lastName,
                            password:props.user.password,
                            rePassword:''
                        }}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log("Saving details ",values)
                            setSubmitting(false);

                            props.save(values);

                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email("Enter valid email").required("Required"),
                            phoneNo:Yup.string().required("Requried").matches(/^[1-9]\d{9}$/,"Enter valid phone number"),
                            firstName : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            lastName : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                            password: Yup.string().required("No password entered").required("Required").matches(/[a-zA-Z0-9]{8,}/,"Enter valid password"),
                            rePassword: Yup.string().required("Required").oneOf([Yup.ref('password'), null],'Passwords must match'),
                        })}
                        >
                        {formik => {
                             const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                             return (
                                <form onSubmit={handleSubmit}>
                                    {/* Email */}
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            name = "email"
                                            type="text"
                                            placeholder="Email abc@xyz.com"
                                            value = {values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.email && touched.email ? "errorField":"")}
                                        />

                                        {errors.email && touched.email && (
                                            <div className="error">{errors.email}</div>
                                        )}
                                    </Col>
                                    {/* Phone Number */}
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="phoneNo">Phone Number</label>
                                        <input 
                                            name = "phoneNo"
                                            type="text"
                                            placeholder="Phone Number"
                                            value = {values.phoneNo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.phoneNo && touched.phoneNo ? "errorField":"")}
                                        />

                                        {errors.phoneNo && touched.phoneNo && (
                                            <div className="error">{errors.phoneNo}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    {/* First Name */}
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input 
                                            name = "firstName"
                                            type="text"
                                            placeholder="First Name"
                                            value = {values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.firstName && touched.firstName ? "errorField":"")}
                                        />

                                        {errors.firstName && touched.firstName && (
                                            <div className="error">{errors.firstName}</div>
                                        )}
                                    </Col>
                                    {/* Last Name */}
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input 
                                            name = "lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            value = {values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.lastName && touched.lastName ? "errorField":"")}
                                        />

                                        {errors.lastName && touched.lastName && (
                                            <div className="error">{errors.lastName}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    
                                    {/* Password */}
                                    <Row>
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            name = "password"
                                            type="password"
                                            placeholder="Password"
                                            value = {values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.password && touched.password ? "errorField":"")}
                                        />

                                        {errors.password && touched.password && (
                                            <div className="error">{errors.password}</div>
                                        )}
                                    </Col>
                                    {/* Retype Password */}
                                    <Col lg="6" md="6" sm="12" className="form-group">
                                        <label htmlFor="rePassword">Retype Password</label>
                                        <input 
                                            name = "rePassword"
                                            type="password"
                                            placeholder="Retype Password"
                                            value = {values.rePassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className= {"form-control " + (errors.rePassword && touched.rePassword ? "errorField":"")}
                                        />

                                        {errors.rePassword && touched.rePassword && (
                                            <div className="error">{errors.rePassword}</div>
                                        )}
                                    </Col>
                                    </Row>
                                    {/* Submit buttons */}
                                    <Row className="form-group">
                                    
                                        <button type="submit" disabled={!(formik.isValid && formik.dirty) } className="btn btn-primary btn-lg">
                                            Save
                                        </button>
                                        <button type="button" className="btn btn-link" onClick = {()=>props.cancel(props.editVariable)}>
                                            Cancel
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

const mapStateToProps = state =>{
    console.log("Profile Form",state);
    return {
        user : state.user,
        editVariable : state.user.formVariables.showProfileDetailsForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save : (x) => dispatch(updateProfileAction(x)), 
        cancel : (val) => dispatch(toggleProfileDetailsFormAction(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileForm);