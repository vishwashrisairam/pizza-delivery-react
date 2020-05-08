import React from 'react';
import {Container, Carousel, Card, Jumbotron} from 'react-bootstrap';
import bg1 from '../assests/images/bg_1.jpg';
import bg2 from '../assests/images/bg_2.jpg';
import bg5 from '../assests/images/bg_5.jpg';
import pizza9 from '../assests/images/pizza-9.jpg';
import drink10 from '../assests/images/drink-10.jpg';
import fries1 from '../assests/images/fries-1.jpeg';



const Home = (props) =>{
    return (
  <Container fluid >
  <Carousel border = 'danger'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {bg2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Tasty pizzas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Juicy UI</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Fast response and delivery</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<Jumbotron fluid className="bg-dark text-white">
  <Container >
    <h1>Welcome to React's Pizza Store</h1>
    <p>
      We are an online pizza delivery store, We'll reach your doorstep in 30 mins!
    </p>
  </Container>
</Jumbotron>
<div>
<Card border= "dark" className="bg-dark text-white">
  <Card.Img src={pizza9} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Pizzas</Card.Title>
    <Card.Text>
      Pizza is a savory dish of Italian origin, consisting of a usually round,
      flattened base of leavened wheat-based dough topped with tomatoes, cheese, and 
      often various other ingredients baked at a high temperature.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
<div>
<Card border= "dark" className="bg-dark text-white">
  <Card.Img src={drink10} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Drinks</Card.Title>
    <Card.Text>
      Liquid to satisfy your thrist and also to you some kick.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
<div>
<Card border= "dark" className="bg-dark text-white">
  <Card.Img src={fries1} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Sides</Card.Title>
    <Card.Text>
      Simply fries, pastas along with your favorite choice of sauces.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
</Container>
    );
}

export default Home;