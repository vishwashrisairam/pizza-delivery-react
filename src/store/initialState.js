let initialState ={
    user:{
        auth:false,
        formVariables:{
            showProfileDetailsForm :false, 
            showAddressForm: false , 
            showPaymentForm: false
        },
        address:[],
        payment:[]
    },
    products:[],
    cart:{},
    test:{
        message:'Hello World'
    }
};

export default initialState;