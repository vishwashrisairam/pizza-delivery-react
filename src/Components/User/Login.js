import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container,Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import './users.css';
import {loginAction} from './../../store/actions/userActions'; 

const Login = (props) =>{

    console.log("Login",props.userLoggedIn)
    if(props.userLoggedIn){
        return <Redirect to="/profile"/>
    }else{
    return (
        <Container className="login">
        <Row>
        <Col lg="3"/>
        <Col>
        <h1>Login</h1>  
        <Formik
            initialValues = {{username:'',password:''}}
            onSubmit={(values,{setSubmitting})=>{
                setSubmitting(false);
                props.login(values)                
                
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().email("Invalid username: Enter your registered email as username").required("Required"),
                password: Yup.string().required("No password entered").required("Required").matches(/[a-zA-Z0-9]{8,}/,"Enter valid password")
            })}
            >
            
            {formik => {
                const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                return (
                    <form onSubmit={handleSubmit}>
                        {/* Username */}
                        <Row className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            name = "username"
                            type="text"
                            placeholder="Username abc@xyz.com"
                            value = {values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className= {"form-control " + (errors.username && touched.username ? "errorField":"")}
                        />

                        {errors.username && touched.username && (
                            <div className="error">{errors.username}</div>
                        )}
                        </Row>
                        {/* Password */}
                        <Row className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={"form-control "+ (errors.password && touched.password ? "errorField":"")}
                        />
                        {errors.password && touched.password && (
                            <div className="error">{errors.password}</div>
                        )}
                        </Row>
                        {/* Login button */}
                        <Row className="form-group">
                        <button type="submit" disabled={!(formik.isValid && formik.dirty) } className="btn btn-primary btn-lg">
                            Login
                        </button>
                        <button type="button" className="btn btn-link">
                            <a href="/register" className="link">Create an account</a>
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
    return {
        userLoggedIn: state.user.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login : (data) => dispatch(loginAction(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);