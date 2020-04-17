const test = (state= {}, {type,payload}) =>{
    switch(type){
        case 'TEST_ACTION':
            return {message:payload}
        default:
            return state
    }
}

export default test;