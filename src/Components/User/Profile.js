import React from 'react';
import {connect} from 'react-redux';
import {Container,Accordion,Card, Row, Col,Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom";


import {toggleProfileDetailsFormAction,
    toggleAddressFormAction,editAddressAction,deleteAddressAction,
    togglePaymentDetailsFormAction,editPaymentAction,deletePaymentAction
    } from './../../store/actions/userActions'; 


import './users.css';
import ProfileEditForm from './ProfileForm';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';


const Profile = (props) =>{

    let editButtonClick =() =>{
        props.toggleProfileDetailsForm(props.showProfileDetailsForm);
    }

    if(!props.loggedUser.auth){
        return <Redirect to="/login"/>
    }else{
    return (
        <Container className="profilePage"> 
            <h2>Welcome {props.loggedUser.firstName} {props.loggedUser.lastName},</h2>  
            <p>Manage your profile details below</p>

            <Accordion defaultActiveKey="0">
                <Card> 
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Your Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {props.showProfileDetailsForm ? <ProfileEditForm/> :
                        <Container>
                        <Row>
                            <Col lg="5" sm="5" md="5">
                                <label>First Name: </label>
                                <span>{props.loggedUser.firstName}</span>
                            </Col>
                            
                            <Col lg="5" sm="5" md="5">
                                <label>Last Name: </label>
                                <span>{props.loggedUser.lastName}</span>
                            </Col>
                            <Col lg="2" sm="2" md="2">
                                <Button href="#" variant="secondary" size="sm" className="float-right" onClick={editButtonClick}>
                                    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="5" sm="5" md="5">
                                <label>Email: </label>
                                <span>{props.loggedUser.email}</span>
                            </Col>
                            
                            <Col lg="5" sm="5" md="5">
                                <label>Phone Number: </label>
                                <span>{props.loggedUser.phoneNumber}</span>
                            </Col>
                        </Row>
                        </Container>    
                        }
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            {/* Address details */}
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Address Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>

                        {/* Show all addresses */}

                        {props.loggedUser.address.map((x,index)=>(
                            <Row key={index}>
                                <Col lg="9" md="9" sm="9">
                                <Card>
                                    <Card.Body>
                                    <span>{x.addressLine1}</span><br/>
                                    <span>{x.addressLine2}</span><br/>
                                    <span>{x.city}</span> <br/>
                                    <span>{x.state},{x.zip}</span><br/>
                                    <span>{x.country}</span>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col lg="3" md="3" sm="3">
                                   
                                    <Button href="#" variant="primary" size="sm" className="float-left" onClick={()=>props.editAddress(index)}>
                                        <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit
                                    </Button>
                                
                                    <Button href="#" variant="danger" size="sm" className="float-right" onClick={()=>props.deleteAddress(index)}>
                                        <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Delete
                                    </Button>
                                    
                                </Col>
                            </Row>
                        ))}

                        <button type="button" className="btn btn-link" onClick = {()=>props.toggleAddressForm(props.showAddressForm)}>
                            Add new Address
                        </button>

                        {/* Address Modal */}
                        <AddressForm show ={props.showAddressForm}/>
                        
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Payment Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {/* Show all payments */}

                        {props.loggedUser.payment.map((x,index)=>(
                            <Row key={index}>
                                <Col lg="9" md="9" sm="9">
                                <Card>
                                    <Card.Body>
                                    <label>Card Name: </label>    
                                    <span>{x.cardName}</span><br/>
                                    <label>Card Number: </label>
                                    <span>{x.cardNumber}</span><br/>
                                    <label>Expiry: </label>
                                    <span>{x.expirationDate}</span> <br/>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col lg="3" md="3" sm="3">
                                   
                                    <Button href="#" variant="primary" size="sm" className="float-left" onClick={()=>props.editPayment(index)}>
                                        <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit
                                    </Button>
                                
                                    <Button href="#" variant="danger" size="sm" className="float-right" onClick={()=>props.deletePayment(index)}>
                                        <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Delete
                                    </Button>
                                    
                                </Col>
                            </Row>
                        ))}

                        <button type="button" className="btn btn-link" onClick = {()=>props.togglePaymentForm(props.showPaymentForm)}>
                            Add new Payment method
                        </button>

                        {/* Address Modal */}
                        <PaymentForm show ={props.showPaymentForm}/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </Container>
    )
    }
}

const mapStateToProps = state =>{
    console.log("Profile state",state)
    return {
        showProfileDetailsForm :state.user.formVariables.showProfileDetailsForm, 
        showAddressForm: state.user.formVariables.showAddressForm , 
        showPaymentForm: state.user.formVariables.showPaymentForm,
        loggedUser:state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleProfileDetailsForm: (x) => dispatch(toggleProfileDetailsFormAction(x)),
        toggleAddressForm: (x) => dispatch(toggleAddressFormAction(x)),
        togglePaymentForm: () => dispatch(togglePaymentDetailsFormAction()),
        editAddress: (x) => dispatch(editAddressAction(x)),
        deleteAddress: (x) => dispatch(deleteAddressAction(x)),
        editPayment: (x) => dispatch(editPaymentAction(x)),
        deletePayment: (x) => dispatch(deletePaymentAction(x)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);