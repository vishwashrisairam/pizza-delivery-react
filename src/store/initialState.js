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
        payment:[],
        cart:[]
    },
    products:{
        allItems:[],
        items:[],
        activePage:0,
        activePageItems:[],
        searchKey:"",
        itemsPerPage:6,
        loading:false,
        error:false,
        errorMessage:"",
        edit:undefined 
    },
    cart:{
        items:[],
        totalPrice:0,
        showOrderForm : false,
        loading:false,
        error:false,
        errorMessage:"",
        orderSuccessful:undefined,
        orderMessage:""
    },
    test:{
        message:'Hello World'
    }
};

export default initialState;