import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from './../logo.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {logOutAction} from './../store/actions/userActions';

function Header(props){
    console.log("Navbar",props.isLoggedUser)
    return (
        <Navbar expand="md" variant="dark" bg="dark" fixed = "top">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              Pizza Delivery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          { props.isLoggedUser ? 
                
            <Nav className="ml-auto">
              <Link to="/" className="nav-link" onClick={props.logout}>Logout</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <Link to="/menu" className="nav-link">Order</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
              <Link to="/contacts" className="nav-link">Contact Us</Link> 
            </Nav>
               :
            <Nav className="ml-auto">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/menu" className="nav-link">Order</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
              <Link to="/contacts" className="nav-link">Contact Us</Link> 
            </Nav>
          }
            
            
            
          </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = state =>{
  console.log("Header state",state)
  return {
      isLoggedUser:state.user.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutAction()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);