import axios from 'axios'; 
// import history from './history';

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

export const loginAction = data => dispatch=>{
    dispatch(setLoader());
    axios.post(API_HOST+'api/users/login',data)
        .then(res=> {
            console.log('login api call',res)
            dispatch({
                type : "LOGIN_USER",
                payload: res.data.user
            })
            dispatch(removeLoader());
            // window.location='/profile'
        })
        .catch(error => {
            console.log('login error',error.response)
            let status = error.response.status;
            let responseMessage = status === 500 ? "Username/Password combination not correct":"User not found"
            dispatch(showErrorPopup(responseMessage));
            dispatch(removeLoader());
        });
    
}

export const registerAction = data => dispatch => {
    
    // Dispatch action to set the loader 
    dispatch(setLoader());
    axios.post(API_HOST+'api/users/register',data)
        .then(res =>{
            dispatch({
                type : "REGISTER_USER", 
                payload : res.data.data
            })
            // dispatch(push('/login'));
            // history.push('./login')
            dispatch(removeLoader());
            window.location='/login'
        })
        .catch(error => {
            console.log(error)
            dispatch(showErrorPopup("Server error"));
            dispatch(removeLoader());
        });
    //Dispatch action to unset the loader 
   
 
}

export const logOutAction = ()=> dispatch =>{
    dispatch(setLoader());
    axios.get(API_HOST+'api/users/logout')
        .then(res =>{
            dispatch({
                type : "LOGOUT_USER",
            })
            dispatch(removeLoader());
            window.location='/'
        })
        .catch(error => {
            console.log(error)
            dispatch(showErrorPopup("Server error"));
            dispatch(removeLoader());
        });
    // return {
    //     type:"LOGOUT_USER",
    //     payload :''
    // }
}

export const toggleProfileDetailsFormAction = (value) => {
    return {
        type:"TOGGLE_PROFILE_FORM",
        payload :value
    }
}

export const toggleAddressFormAction = (value) => {
    return {
        type:"TOGGLE_ADDRESS_FORM",
        payload :value
    }
}

export const togglePaymentDetailsFormAction = (value) => {
    return {
        type:"TOGGLE_PAYMENT_FORM",
        payload :value
    }
}

export const updateProfileAction = (data) => {
    return {
        type : "UPDATE_PROFILE",
        payload: data
    }
}

export const addNewAddressAction = (data) => {
    return {
        type:"ADD_ADDRESS",
        payload : data
    }
}

export const editAddressAction = (index) =>{
    return {
        type:"EDIT_ADDRESS",
        payload : index
    }
}

export const deleteAddressAction = (index) =>{
    return {
        type:"DELETE_ADDRESS",
        payload : index
    }
}

export const addPaymentAction = (value) => {
    return {
        type: "ADD_PAYMENT",
        payload: value 
    }
}

export const editPaymentAction = (index) =>{
    return {
        type:"EDIT_PAYMENT",
        payload : index
    }
}


export const deletePaymentAction = (index) =>{
    return {
        type:"DELETE_PAYMENT",
        payload : index
    }
}

