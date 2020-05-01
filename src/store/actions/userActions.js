export const loginAction = data => {
    
    return {
        type : "LOGIN_USER",
        payload: data
    }
}

export const registerAction = data => {
    return {
        type : "REGISTER_USER", 
        payload : data
    }
}

export const logOutAction = ()=>{
    return {
        type:"LOGOUT_USER",
        payload :''
    }
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