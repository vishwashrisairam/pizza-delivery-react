import initialState from './../initialState';

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                allItems:payload.items,
                items:payload.items,
                numPages:payload.pages,
                activePage:1,
                activePageItems:payload.activePageitems
            };
        case "GOTO_PAGE":
            return {
                ...state,
                activePage:payload
            }
        case "FILTER":
            return {
                ...state,
                items:payload,
                activePage:1
            }
        case "SET_SEARCH_KEY":
            return {
                ...state,
                searchKey:payload
            }
        case "SEARCH":
            return {
                ...state,
                items:payload,
                activePage:1,
                searchKey:""
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
        case "EDIT_PRODUCT":
            return {
                ...state,
                edit: payload
            }
        case "RESET_EDIT":
            return {
                ...state,
                edit:undefined
            }

       default:
            return state;
    }
}

export default productReducer;