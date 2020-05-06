import initialState from './../initialState';
import {resetState} from './../sessionStorage';

const user = (state= initialState, {type,payload}) =>{
    console.log('ureducer',initialState)
    switch(type){
        case 'LOGIN_USER':
            console.log("inside login user reducer",state);
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
            resetState();
            return {
                ...state,
                auth:false
            }
        case "TOGGLE_PROFILE_FORM":
            return {
                ...state, 
                formVariables:{
                    ...state.formVariables,
                    showProfileDetailsForm : !payload
                }  
            }
        case "TOGGLE_ADDRESS_FORM":
            return {
                ...state, 
                addind:undefined,
                formVariables:{
                    ...state.formVariables,
                    showAddressForm : !payload
                }  
            }
        case "TOGGLE_PAYMENT_FORM": 
        return {
            ...state, 
            payind:undefined,
            formVariables:{
                ...state.formVariables,
                showPaymentForm : !payload
            }  
        }
        case "UPDATE_PROFILE":
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                phoneNumber:payload.phoneNo,
                password:payload.password,
                formVariables:{
                    ...state.formVariables,
                    showProfileDetailsForm : false
                }  
            }
        case "ADD_ADDRESS":
            console.log('add address',state)
            return {
                ...state,
                address:state.address.concat(payload),
                addind:undefined,
                formVariables:{
                    ...state.formVariables,
                    showAddressForm : false
                } 
            }
        case "EDIT_ADDRESS":
            return {
                ...state,
                addind:payload,
                formVariables:{
                    ...state.formVariables,
                    showAddressForm : true
                }
            }
        case "UPDATE_ADDRESS":
            // make service call to update
            return {
                ...state,
                addind:payload,
                formVariables:{
                    ...state.formVariables,
                    showAddressForm : true
                }
            }
        
        case "DELETE_ADDRESS":
            let address = state.address;
            address.splice(payload,1)
            return {
                ...state,
                address: address
            }
        case "ADD_PAYMENT":
            console.log('add payment',state)
            return {
                ...state,
                payment:state.payment.concat(payload),
                payind:undefined,
                formVariables:{
                    ...state.formVariables,
                    showPaymentForm : false,
        
                } 
            }
        case "EDIT_PAYMENT":
            console.log('ured',payload)
            return {
                ...state,
                payind:payload,
                formVariables:{
                    ...state.formVariables,
                    showPaymentForm : true
                }
            }
        case "UPDATE_PAYMENT":
            // make service call to update the payment
            return {
                ...state,
                payind:payload,
                formVariables:{
                    ...state.formVariables,
                    showPaymentForm : true
                }
            }
        
        case "DELETE_PAYMENT":
            let payment = state.payment;
            payment.splice(payload,1)
            return {
                ...state,
                payment: payment
            }
        case "SHOW_ERROR_POPUP":
            return {
                ...state,
                error:true,
                errorMessage :payload
            }

        case "HIDE_ERROR_POPUP":
            return {
                ...state,
                error:false,
                errorMessage:""
            }
        case "SET_LOADER":
            return {
                ...state,
                loading:true 
            }
        
        case "REMOVE_LOADER":
            return {
                ...state,
                loading : false 
            }

            
        case 'TEST':
            return {id:'test',data:payload}
        default:
            return state
    }
}

export default user;