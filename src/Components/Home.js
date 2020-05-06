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
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<Jumbotron fluid className="bg-dark text-white">
  <Container >
    <h1>Welcome to React's Pizza Store!</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
<div>
<Card border= "dark" className="bg-dark text-white">
  <Card.Img src={pizza9} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Pizzas</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
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
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
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
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
</Container>
    );
}

export default Home;