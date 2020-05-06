let initialState ={
    user:{
        auth:false,
        formVariables:{
            showProfileDetailsForm :false, 
            showAddressForm: false , 
            showPaymentForm: false
        },
        loading:false,
        error:false,
        errorMessage:"",
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