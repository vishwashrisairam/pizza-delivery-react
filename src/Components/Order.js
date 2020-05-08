import React, { useEffect } from 'react';
import { Row, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchOrdersAction,resetOrdersAction } from '../store/actions/orderAction'
import pizza2 from '../assests/images/pizza-2.jpg';



const Order = (props) => {
    const fetchOrders = () => props.fetchOrders();
    useEffect(() => {
        console.log('fetch products')
        fetchOrders();
        return () => {
            props.resetOrders();
        }
    }, []);
    console.log('log products', props.orders)
    return (
        <Container>
        <h3>Your previous orders</h3>
            <br />
            <Row>
                {
                    props.orders.length === 0 ? <p> No orders found</p> :
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col" >Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Ordered date</th>
                                        <th scope="col" >Status</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.orders.map((order, index) => {
                                        return(order.items.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                <td >{item.productName}</td>
                                                <td >{item.quantity}</td>
                                                <td >{item.price}</td>
                                                <td >{order.date}</td>
                                                <td >{order.status}</td>
                                            </tr>)
                                            })
                                            )
                                        
                                    })}

                                </tbody>
                            </table>
                            </div>
                }

            </Row>
        </Container>
        
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
        fetchOrders: () => { dispatch(fetchOrdersAction) },
        resetOrders: () => { dispatch(resetOrdersAction)}

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);