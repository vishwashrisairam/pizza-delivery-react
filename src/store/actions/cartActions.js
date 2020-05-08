import axios from 'axios'; 
const API_HOST = 'http://localhost:3001/';


export const setLoader = () =>{
    return {
        type:"SET_LOADER"        
    }
}
export const removeLoader = () =>{
    return {
        type:"REMOVE_LOADER"        
    }
}

export const showErrorPopup = (message) => {
    return {
        type:"SHOW_ERROR_POPUP",
        payload:message
    }
}

export const hideErrorPopup= () => {
    return {
        type:"HIDE_ERROR_POPUP"
    }
}

export const showSuccessPopup = (message) => {
    return {
        type:"SHOW_SUCCESS_POPUP",
        payload:message
    }
}

export const hideSuccessPopup= () => {
    return {
        type:"HIDE_SUCCESS_POPUP"
    }
}

export const addToCartAction = (item,cart) => {
    console.log('a2c',item.quantity)
    let qty =false;
    let itemId = item._id;
    if(cart.length >0 ){
        cart.forEach(x => {
            if(x._id===itemId){
                x.quantity++;
                qty=true;
            }

        });
        console.log(qty)
        if(!qty){
            cart.push({...item,quantity:1})
        }
    }else{
        cart.push({...item,quantity:1})
    }
    console.log('cart',cart)

    return {
        type:"ADD_TO_CART",
        payload:cart
        
    }
}

export const updateItemQuantityAction = (qty,id,items) => {
    items.forEach(x=>{
        if(x._id===id){
            if(qty){
                x.quantity = qty
            }else{
                x.quantity =""
            }
        }
    })
    
    return {
        type:"UPDATE_QUANTITY",
        payload:items
    }

}

export const deleteItemAction = (id,items) => {
    let updatedItems = items.filter(x=> x._id!==id)
    return {
        type:"DELETE_ITEM",
        payload:updatedItems
    }
}
export const showOrderFormAction = () =>{
    return {
        type:"SHOW_ORDER_FORM"
    }
}

export const hideOrderFormAction = () =>{
    return {
        type:"HIDE_ORDER_FORM"
    }
}

export const placeOrderAction = request => dispatch => {
    axios.post(API_HOST + 'api/order/order', request)
        .then(res => {
            console.log("res", res);
            dispatch(showSuccessPopup('Your order id is'+res.data._id+'. Please check your profile page to track the status'))
        })
        .catch(error => {
            console.log(error)
            dispatch(showErrorPopup('Oops. We could not  complete the order.Please try again!!!'))
        });
    // make service call 
    //dispatch(showSuccessPopup('Your order id is 12345. Please check your profile page to track the status'))

    // dispatch(showErrorPopup('Oops. We could not  complete the order.Please try again!!!'))
}