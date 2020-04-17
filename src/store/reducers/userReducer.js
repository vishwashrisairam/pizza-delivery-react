import initialState from './../initialState';

const user = (state= initialState, {type,payload}) =>{
    console.log(state)
    switch(type){
        case 'LOGIN_USER':
            console.log("inside login user reducer");
            //  Make service call to authenitcate the user 
            return  {
                ...state,
                auth:true , 
                username : payload.username, 
                firstName : "First",
                lastName : "Last",
                email:  payload.username,
                phone :'1233234323',
                addresses:[],
                payments:[],
                isAdmin:false
            }
            
        case 'REGISTER_USER':
            console.log("inside register user reducer",payload);
            return {
                ...state,
                registered:true,
                errormessage:''
            }
        case 'LOGOUT_USER':
            console.log("Inside user logout user reducer")
            return {
                auth:false
            }
        case 'TEST':
            return {id:'test',data:payload}
        default:
            return state
    }
}

export default user;