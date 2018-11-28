import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import itemReducer from './reducers/items';
import authReducer from './reducers/auth';

export default createStore(combineReducers( 
  {form: formReducer, itemReducer, auth: authReducer}
 ), 
  applyMiddleware(thunk));