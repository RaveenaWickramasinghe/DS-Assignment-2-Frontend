import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import allReducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const Store = createStore(allReducers, composeEnhancers(
    applyMiddleware(promise))
);
export default Store;