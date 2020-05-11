import initialState from './../initialState';

export const fetchOrdersAction = userId =>dispatch => {
    //console.log("entered1")
    console.log("initial state user id", userId)
    fetch('http://localhost:3001/api/order/order/' + userId).then((response) => {
        return response.json();
    }).then((res) => {
        console.log('result', res)
        dispatch({ type: "FETCH_ORDERS", payload: res })
    })

}


export const resetOrdersAction = () => {
    return {
        type:"RESET_ORDERS"
    }
}
