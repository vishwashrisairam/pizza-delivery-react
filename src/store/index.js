import {createStore,combineReducers} from 'redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import testReducer from './reducers/testReducer';
import cartReducer from './reducers/cartReducer';

import initialState from './initialState';

const allReducers = combineReducers({user:userReducer,products:productReducer,cart:cartReducer,test:testReducer});
const devToolsOption = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(allReducers,initialState,devToolsOption);


export default store;