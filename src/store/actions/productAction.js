import axios from 'axios'; 

const API_HOST = 'http://localhost:3001/';
const ITEMS_PER_PAGE=6;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'


export const setLoader = () =>{
    return {
        type:"SET_LOADER"        
    }
}
export const removeLoader = () =>{
    return {
        type:"REMOVE_LOADER"        
    }
}

export const showErrorPopup = (message) => {
    return {
        type:"SHOW_ERROR_POPUP",
        payload:message
    }
}

export const hideErrorPopup= () => {
    return {
        type:"HIDE_ERROR_POPUP"
    }
}


const fetchProductsAction = (dispatch) => {
    dispatch(setLoader());
    fetch('http://localhost:3001/api/products/products').then((response) => {
        return response.json();
    }).then((res) => {
        console.log('result',res.length)
        dispatch(removeLoader());
        let activePageitems = res.slice(0,Math.min(ITEMS_PER_PAGE,res.length));
        dispatch({ type: FETCH_PRODUCTS, payload: {
            items:res,
            pages:Math.ceil(res.length/ITEMS_PER_PAGE),
            activePageitems:activePageitems
        
        } })
    })
            
}

export const addNewProductAction = data => dispatch => {
    console.log('add product action')
    dispatch(setLoader());
    axios.post(API_HOST+'api/products/products',data)
        .then(res=>{
            console.log('add new product success',res)
            dispatch(removeLoader());
            dispatch(resetEditProductAction());
            window.location='/menu'
        })
        .catch(err=>{
            console.log('add new product error',err)
            dispatch(showErrorPopup("Server error"));
            dispatch(removeLoader());
        })
       

}


export const updateProductAction = (id,data) => dispatch => {
    console.log('update product action')
    dispatch(setLoader());
    axios.patch(API_HOST+'api/products/products/'+id,data)
        .then(res=>{
            console.log('update product success',res)
            dispatch(removeLoader());
            dispatch(resetEditProductAction());
            window.location='/menu'
        })
        .catch(err=>{
            console.log('update product error',err)
            dispatch(showErrorPopup("Server error"));
            dispatch(removeLoader());
        })

}

export const editProductAction = (id) =>{
    return {
        type: "EDIT_PRODUCT",
        payload:id
        
    }
} 

export const deleteProductAction = id  => dispatch => {
    dispatch(setLoader());
    axios.delete(API_HOST+'api/products/products/'+id)
    .then(res=>{
        console.log('delete product success',res)
        dispatch(removeLoader());
        window.location='/menu'
    })
    .catch(err=>{
        console.log('delete product error',err)
        dispatch(showErrorPopup("Server error"));
        dispatch(removeLoader());
    })
}

export const resetEditProductAction = (id) =>{
    return {
        type: "RESET_EDIT",
        
    }
} 

export const gotoPageAction = (index) => {

    return {
        type:"GOTO_PAGE",
        payload:index
    }
}

export const filterAction =(category,items) => {

    let filteredItems=[]
    if(category!=='all')
        filteredItems = items.filter(x => x.category.toLowerCase()===category);
    else
        filteredItems = items 

    console.log('filter action',filteredItems)

    return {
        type:"FILTER",
        payload:filteredItems
    }
}

export const setSearchKeyAction = (value) =>{
    console.log('search',value)
    return {
        type:"SET_SEARCH_KEY",
        payload: value 
    }
} 

export const searchAction =(key,items) => {
    console.log('s',key,items)
    let filteredItems=[]
    filteredItems = items.filter(x => x.productName.toLowerCase().includes(key.toLowerCase()));

    console.log('search action',filteredItems)

    return {
        type:"SEARCH",
        payload:filteredItems
    }
}


export default fetchProductsAction;
