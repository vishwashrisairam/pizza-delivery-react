export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const fetchProductsAction = (dispatch) => {
    console.log("entered1")
    fetch('http://localhost:3001/api/products/products').then((response) => {
        return response.json();
    }).then((res) => {
        console.log('result',res)
        dispatch({ type: FETCH_PRODUCTS, payload: res })
    })
            
}


export default fetchProductsAction;
