const cartReducer = (state= {}, {type,payload}) =>{
    switch(type){
        case "ADD_TO_CART":
            return {
                ...state,
                items:payload,
                showOrderForm:false
            }
        case "UPDATE_QUANTITY":
            return{
                ...state,
                items:payload
                
            }
        case "DELETE_ITEM":
            return{
                ...state,
                items:payload
            }
        case "SHOW_ORDER_FORM":
            return {
                ...state,
                showOrderForm:true
            }
        case "HIDE_ORDER_FORM":
            return {
                ...state,
                showOrderForm:false
            }
        case "SHOW_ERROR_POPUP":
            return {
                ...state,
                error:true,
                errorMessage :payload,
                showOrderForm:false
            }

        case "HIDE_ERROR_POPUP":
            return {
                ...state,
                error:false,
                errorMessage:""
            }
        case "SHOW_SUCCESS_POPUP":
            return {
                ...state,
                orderSuccessful:true,
                orderMessage :payload,
                showOrderForm:false,
                items:[]
            }

        case "HIDE_SUCCESS_POPUP":
            return {
                ...state,
                orderSuccessful:undefined,
                orderMessage:""
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

export default cartReducer;