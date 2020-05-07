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
    userid: "5ea8877caebaab0a073e031e",
    products:[],
    cart: {},
    order: [],
    test:{
        message:'Hello World'
    }
};

export default initialState;