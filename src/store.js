import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/items';

export default createStore(itemReducer, applyMiddleware(thunk));