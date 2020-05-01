import {createStore,combineReducers} from 'redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import testReducer from './reducers/testReducer';
import cartReducer from './reducers/cartReducer';

// import initialState from './initialState';
import { loadState, saveState } from './sessionStorage';

const allReducers = combineReducers({user:userReducer,products:productReducer,cart:cartReducer,test:testReducer});
const devToolsOption = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(allReducers,initialState,composeEnhancer(applyMiddleware(session)));
const persistedState = loadState();

const store = createStore(allReducers,persistedState,devToolsOption);
store.subscribe(() => {
    saveState(store.getState());
});

export default store;