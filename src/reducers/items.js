import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_ERROR,
  ADD_ITEM_SUCCESS
}  from '../actions/items';

const initialState = {
  items : [],
  loading: false,
  error: null,
  addingItem: false
};

export default function itemReducer(state=initialState, action){
  if(action.type === FETCH_ITEMS_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if(action.type === FETCH_ITEMS_SUCCESS){
    return {
      ...state,
      loading: false,
      items: action.items,
      error: null
    };
  } else if(action.type === FETCH_ITEMS_ERROR){
    return {
      ...state,
      loading: false,
      items: [],
      error: action.error
    };
  } else if(action.type === ADD_ITEM_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if(action.type === ADD_ITEM_SUCCESS){
    return {
      ...state,
      loading: false,
      items: [...state.items,action.item],
      error: null
    };
  } else if(action.type === ADD_ITEM_ERROR){
    return {
      ...state,
      loading: false,
      items: [],
      error: action.error
    };
  }

  return state;

}