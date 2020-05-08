import React from 'react';
import { Container, Jumbotron, Button, Row, Card, CardDeck } from 'react-bootstrap';
import pizza2 from '../assests/images/pizza-2.jpg';
const API_HOST = 'http://localhost:3001/';

const Contact = (props) => {
    return (
        <Container>
            <Row>
                <h3> Here to fix your issues: </h3>
                <CardDeck style={{ display: 'flex', flexDirection: 'row' }}> 
                    <Card style={{ width: '18rem', flex: 1 }} >
                        <Card.Img variant="top" src={pizza2} />
                        <Card.Body>
                            <Card.Title>Sai Ram #Dev1</Card.Title>
                            <Card.Text>
                                Student at UTD, Part time at react pizza store.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', flex: 1 }} >
                        <Card.Img variant="top" src={pizza2} />
                        <Card.Body>
                            <Card.Title>Uma Mahesh #Dev2</Card.Title>
                            <Card.Text>
                                Student at UTD, Part time at react pizza store.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', flex: 1 }} >
                        <Card.Img variant="top" src={pizza2} />
                        <Card.Body>
                            <Card.Title>Ramanna #Dev3</Card.Title>
                            <Card.Text>
                                Student at UTD, Part time at react pizza store.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                </Row>
            </Container>

    );
}

export default Contact;