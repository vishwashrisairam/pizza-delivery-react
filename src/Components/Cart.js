import React from 'react';
import {Container,Row,Alert} from 'react-bootstrap'
import { connect } from 'react-redux';
import {updateItemQuantityAction,deleteItemAction,showOrderFormAction,
    hideSuccessPopup,hideErrorPopup} from '../store/actions/cartActions';

import OrderForm from './OrderForm';
import pizza2 from '../assests/images/pizza-2.jpg';


const Cart = (props) =>{
    return (
        <Container>

        {props.showSuccessPopup && 
            <Alert variant="success" onClose={() => props.dismissSuccess()} dismissible>
                <Alert.Heading>Hurray! Your order is placed!</Alert.Heading>
                <p>
                    {props.successMessage}
                </p>
            </Alert>
        }
        {props.showError && 
            <Alert variant="danger" onClose={() => props.dismissError()} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {props.errorMessage}
                </p>
            </Alert>
        }

        <h3>Your Cart Items</h3>
        <Row>
            {
                props.cartItems.length === 0 ? <p> No items added in the cart</p> :
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Options</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Price($)</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cartItems.map((item,index)=>{
                                    return (
                                        <tr key={index}>
                                            <td><img src={pizza2} alt="pizza" width="50" height="50"/> </td>
                                            <td>{item.productName}</td>
                                            <td>{item.size},{item.crust},{item.toppings}</td>
                                            <td>
                                                <input className="form-control" type="text" name="qunatity" value={item.quantity} onChange={(e)=>props.updateQuantity(e.target.value,item._id,props.cartItems)}/>
                                            </td>
                                             <td className="text-right">{item.price*item.quantity}</td>
                                            <td className="text-right">
                                                <button className="btn btn-sm btn-danger" onClick={()=>props.deleteItem(item._id,props.cartItems)}>
                                                    <i className="fa fa-trash"></i>
                                                 </button> 
                                            </td>
                                        </tr>
                                    )
                                })}
                               
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Sub-Total</td>
                                    <td className="text-right">$ {props.subTotal}</td>
                                    <td/>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Additional Charges(tax + Delivery fee)</td>
                            <td className="text-right">$ {props.additonalCharges}</td>
                                    <td/>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>$ {props.totalPrice}</strong></td>
                                    <td/>
                                </tr>
                            </tbody>
                        </table>
                        
                        <button type="submit" className="btn btn-success btn-lg" disabled={props.proceedToCheckoutDisable || !props.isUserLoggedin} onClick={props.showOrderForm}>Proceed To Checkout </button>
                        <br/>
                        {props.proceedToCheckoutDisable && <span className="error">Quantity should not be zero for any item.Please remove the item or add quantity.</span>}        
                    
                        {!props.isUserLoggedin && <span className="error">Please <a href="/login">login</a> to place the order.</span>}
                        
                        { props.show  && <OrderForm items={props.cartItems} amount={props.totalPrice}/> } 
                                
                               
                    
                    </div>
    
            }

        </Row>
        </Container>

    );
}


const mapStateToProps = state => {

    let subTotal = 0 
    let allNonZeroQtys=true
    if(state.cart.items.length>0){
        state.cart.items.forEach(x=>{
            subTotal+=(x.quantity*x.price)
            if(!x.quantity){
                allNonZeroQtys=false
            }
            
        });
    }
    let taxDelivery =  subTotal > 0 ? 3 + subTotal*0.08:0;
    taxDelivery=parseFloat(taxDelivery).toFixed(2)
    let total = parseFloat(subTotal) +parseFloat(taxDelivery);
    total=parseFloat(total).toFixed(2)
    
    console.log('check',state.cart.showOrderForm)

    return{
        cartItems: state.cart.items,
        subTotal:subTotal,
        additonalCharges: taxDelivery,
        totalPrice: total,
        proceedToCheckoutDisable:!allNonZeroQtys,
        show : state.cart.showOrderForm,
        isUserLoggedin:state.user.auth,
        showError: state.cart.error,
        errorMessage:state.cart.errorMessage,
        showSuccessPopup: state.cart.orderSuccessful,
        successMessage:state.cart.orderMessage
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateQuantity : (qty,id,items) => dispatch(updateItemQuantityAction(qty,id,items)),
        deleteItem : (id,items) => dispatch(deleteItemAction(id,items)),
        showOrderForm: () => dispatch(showOrderFormAction()),
        dismissError :() => dispatch(hideErrorPopup()),
        dismissSuccess: () => dispatch(hideSuccessPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);