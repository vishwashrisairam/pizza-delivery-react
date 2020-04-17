import React from 'react';
import './App.css';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


import testAction from './store/actions/testAction';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Profile from './Components/User/Profile';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Contact from './Components/ContactPage';



function App(props) {
  return (
    <div className="App">
      <Container>
        {/*Navigation bar  */}
       
      <Router>
       
      <Header/>  
      
      <h1>Hello</h1>
      {/* <Row style={{"margin-top":"40px"}}>  
        <button onClick={props.testAction}>Update</button>
        {props.test.message}
      </Row> */}
      <Row>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          
          <Route exact path="/menu">
            <Menu/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/contacts">
            <Contact/>
          </Route>
        </Switch>
      </Row>
      </Router>
    </Container>
    <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    test:state.test
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testAction : () => {dispatch(testAction)}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
