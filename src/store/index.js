import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import testReducer from './reducers/testReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

// import initialState from './initialState';
import { loadState, saveState } from './sessionStorage';

const allReducers = combineReducers({user:userReducer,products:productReducer,cart:cartReducer, order: orderReducer,test:testReducer});
// const devToolsOption = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(allReducers,initialState,composeEnhancer(applyMiddleware(session)));
const persistedState = loadState();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers,persistedState,composeEnhancer(applyMiddleware(thunk)));
store.subscribe(() => {
    saveState(store.getState());
});

export default store;