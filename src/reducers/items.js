import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS
}  from '../actions/items';

const initialState = {
  items : [],
  loading: false,
  error: null,
  inventoryLocation: null,
  inventoryCategory: null 
};

export default function itemReducer(state=initialState, action){
  if(action.type === FETCH_ITEMS_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    };
  }

  if(action.type === FETCH_ITEMS_SUCCESS){
    return {
      ...state,
      loading: false,
      items: action.items,
      error: null
    };
  }

  if(action.type === FETCH_ITEMS_ERROR){
    return {
      ...state,
      loading: false,
      items: [],
      error: action.error
    };
  }

  return state;

}