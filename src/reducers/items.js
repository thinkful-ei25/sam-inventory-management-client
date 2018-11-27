import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_ERROR,
  ADD_ITEM_SUCCESS,
  DROP_ITEM_ERROR,
  DROP_ITEM_REQUEST,
  DROP_ITEM_SUCCESS
}  from '../actions/items';

const initialState = {
  items : [],
  loading: false,
  error: null,
  addingItem: false,
  expandedItem: null,
  editingItem: false
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
  } else if(action.type === FETCH_ITEM_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if(action.type === FETCH_ITEM_SUCCESS){
    return {
      ...state,
      loading: false,
      expandedItem: action.item,
      error: null
    };
  } else if(action.type === FETCH_ITEM_ERROR){
    return {
      ...state,
      loading: false,
      expandedItem: null,
      error: action.error
    };
  } 
  else if(action.type === ADD_ITEM_REQUEST){
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
  else if(action.type === DROP_ITEM_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if(action.type === DROP_ITEM_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      items: state.items.filter(item=>item.id!==action.id)
    };
  } else if(action.type === DROP_ITEM_ERROR){
    return {
      ...state,
      loading: false,
      items: [],
      error: action.error
    };
  }
  return state;
}