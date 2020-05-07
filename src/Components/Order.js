import React from 'react';
import { Card, Button, ButtonGroup, CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux';
import fetchOrdersAction from '../store/actions/orderAction'
import pizza2 from '../assests/images/pizza-2.jpg';



const Order = (props) => {
    console.log('log products', props.orders)
    return (
        <div>
        <h1>Order page</h1>
         Orders: <button onClick={props.fetchOrders}> Fetch Orders</button>
            <CardDeck style={{ display: 'flex', flexDirection: 'column' }}>
                <br />
                {
                    props.orders.length === 0 ? <p> No orders found</p> :
                        props.orders.map((order, index) => (
                            <div key={index}>

                                <Card style={{ width: '18rem', flex: 1 }} >                                    <Card.Body>
                                        <Card.Title>{order._id}</Card.Title>
                                        <Card.Text>
                                            {order.isCancelled}
                                        </Card.Text>
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="secondary">Edit</Button>
                                            <Button variant="secondary">delete</Button>
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>

                            </div>
                        ))
                }

            </CardDeck>
        </div>
        
    );
}
/*
const componentDidMount = (props) => {
    return props.fetchProducts
}
*/


const mapStateToProps = state => {
    return {
        orders: state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => { dispatch(fetchOrdersAction) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);