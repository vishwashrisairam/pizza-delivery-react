import initialState from './../initialState';

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_PRODUCTS":
            console.log("entered2",payload)
            return state.concat(payload);
       default:
            return state;
    }
}

export default productReducer;
