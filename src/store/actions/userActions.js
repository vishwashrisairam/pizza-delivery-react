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
