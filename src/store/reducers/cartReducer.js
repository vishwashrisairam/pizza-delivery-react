const cartReducer = (state= {}, {type,payload}) =>{
    switch(type){
        case 'TEST':
            return {id:'test',data:payload}
        default:
            return state
    }
}

export default cartReducer;