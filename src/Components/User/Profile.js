import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';


const Profile = (props) =>{
    return (
        <Container>
            <h1>Profile Page</h1> 
            <p>Welcome {props.loggedUser}</p>  
        </Container>
    )
}

const mapStateToProps = state =>{
    console.log("Profile state",state)
    return {
        loggedUser:state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);