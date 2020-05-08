import initialState from './../initialState';

const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_ORDERS":
            console.log("entered2", payload)
            return state.concat(payload);
        case "RESET_ORDERS":
            return []
        default:
            return state;
    }
}

export default orderReducer;
