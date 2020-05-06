import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

import './users.css';
import Loader from '../Loader'
import {registerAction,hideErrorPopup} from './../../store/actions/userActions';

const Register = (props) =>{

console.log("Registered?:",props.isRegistered);    
    
// if(props.isRegistered){ 
//     return <Redirect to='/login'/> 
// }else{
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
                    <h1>Register</h1> 
                    {props.isLoading && <Loader/>  }
                    <Formik
                        initialValues={{email:'',phoneNo:'',firstName:'',lastName:'',password:'',rePassword:''}}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log("Registering user",values)
                            setSubmitting(false);

                            props.register(values);

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
                                    <Row className="form-group">
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
                                    </Row>
                                    {/* Phone Number */}
                                    <Row className="form-group">
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
                                    </Row>
                                    {/* First Name */}
                                    <Row className="form-group">
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
                                    </Row>
                                    {/* Last Name */}
                                    <Row className="form-group">
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
                                    </Row>
                                    
                                    {/* Password */}
                                    <Row className="form-group">
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
                                    </Row>
                                    {/* Retype Password */}
                                    <Row className="form-group">
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
                                    </Row>
                                    {/* Submit buttons */}
                                    <Row className="form-group">
                                    
                                        <button type="submit" disabled={!(formik.isValid && formik.dirty) } className="btn btn-primary btn-lg">
                                            Register
                                        </button>
                                        <button type="button" className="btn btn-link">
                                            <a href="/login" className="link">Already have an account?Login</a>
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
    // }
}

const mapStateToProps = state =>{
    console.log("Registration state",state.user.registered);
    return {
        isRegistered : state.user.registered,
        isLoading : state.user.loading,
        foundError : state.user.error,
        errorMessage: state.user.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register : (x) => dispatch(registerAction(x)), 
        dismissError: () => dispatch(hideErrorPopup())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);