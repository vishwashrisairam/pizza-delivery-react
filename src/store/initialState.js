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
    userid: "5ea8877caebaab0a073e031e",
    products:[],
    cart: {},
    order: [],
    test:{
        message:'Hello World'
    }
};

export default initialState;