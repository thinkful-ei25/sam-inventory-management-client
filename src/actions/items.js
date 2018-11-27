import {API_BASE_URL} from '../config';
//import {SubmissionError} from 'redux-form';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST
});

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  items
});

export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';
const fetchItemsError = error => ({
  type: FETCH_ITEMS_ERROR,
  error
});

export const fetchItems = () => (dispatch) => {
  dispatch(fetchItemsRequest());
  return fetch(`${API_BASE_URL}/api/items`)
    .then((res)=>{
      if(!res.ok){
        const contentType = res.headers.get('content-type');
        if(contentType && contentType.startsWith('application/json')){
          return res.json().then(err=> Promise.reject(err));
        }

        const error = new Error(res.statusText);
        error.code = res.status;
        return Promise.reject(error);
      }
      return res;
    })
    .then(res=>res.json())
    .then(items => dispatch(fetchItemsSuccess(items)))
    .catch(error=>dispatch(fetchItemsError(error)));

};

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
});

export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
const fetchItemSuccess = item => ({
  type: FETCH_ITEM_SUCCESS,
  item
});

export const FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR';
const fetchItemError = error => ({
  type: FETCH_ITEM_ERROR,
  error
});

export const fetchItem = (id) => (dispatch) => {
  dispatch(fetchItemRequest());
  return fetch(`${API_BASE_URL}/api/items/${id}`)
    .then((res)=>{
      if(!res.ok){
        const contentType = res.headers.get('content-type');
        if(contentType && contentType.startsWith('application/json')){
          return res.json().then(err=> Promise.reject(err));
        }

        const error = new Error(res.statusText);
        error.code = res.status;
        return Promise.reject(error);
      }
      return res;
    })
    .then(res=>res.json())
    .then(item => dispatch(fetchItemSuccess(item)))
    .catch(error=>dispatch(fetchItemError(error)));
};


export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST
});

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
const addItemSuccess = item => ({
  type: ADD_ITEM_SUCCESS,
  item
});

export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
const addItemError = error => ({
  type: ADD_ITEM_ERROR,
  error
});

export const addItem = item => (dispatch) => {
  dispatch(addItemRequest());
  return fetch(`${API_BASE_URL}/api/items`,
  {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then(res=>{
    if(!res.ok){
      if (
        res.headers.has('content-type') &&
        res.headers.get('content-type').startsWith('application/json')
      ) {
        // It's a nice JSON error returned by us, so decode it
        console.log('returning json error');
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res;
  })
  .then(res=>res.json())
  .then((data)=>{
    dispatch(addItemSuccess(data));
  })
  .catch(err=>{
    dispatch(addItemError(err));
  })
};


export const DROP_ITEM_REQUEST = 'DROP_ITEM_REQUEST';
const dropItemRequest = () => ({
  type: DROP_ITEM_REQUEST
});

export const DROP_ITEM_SUCCESS = 'DROP_ITEM_SUCCESS';
const dropItemSuccess = (id) => ({
  type: DROP_ITEM_SUCCESS,
  id
});

export const DROP_ITEM_ERROR = 'DROP_ITEM_ERROR';
const dropItemError = error => ({
  type: DROP_ITEM_ERROR,
  error
});

export const dropItem = (id) => (dispatch) => {
  dispatch(dropItemRequest());
  return fetch(`${API_BASE_URL}/api/items/${id}`,{method: "DELETE"})
    .then((res)=>{
      if(!res.ok){
        const contentType = res.headers.get('content-type');
        if(contentType && contentType.startsWith('application/json')){
          return res.json().then(err=> Promise.reject(err));
        }

        const error = new Error(res.statusText);
        error.code = res.status;
        return Promise.reject(error);
      }
      return res;
    })
    .then(() => dispatch(dropItemSuccess(id)))
    .catch(error=>dispatch(dropItemError(error)));
};

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
const editItemRequest = () => ({
  type: EDIT_ITEM_REQUEST
});

export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
const editItemSuccess = (item) => ({
  type: EDIT_ITEM_SUCCESS,
  item
});

export const EDIT_ITEM_ERROR = 'EDIT_ITEM_ERROR';
const editItemError = error => ({
  type: EDIT_ITEM_ERROR,
  error
});

export const editItem = (item) => dispatch =>{
  dispatch(editItemRequest());
  return fetch(`${API_BASE_URL}/api/items/${item.id}`,
  {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then(res=>{
    if(!res.ok){
      if (
        res.headers.has('content-type') &&
        res.headers.get('content-type').startsWith('application/json')
      ) {
        // It's a nice JSON error returned by us, so decode it
        console.log('returning json error');
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res;
  })
  .then(res=>res.json())
  .then((data)=>{
    dispatch(editItemSuccess(data));
  })
  .catch(err=>{
    dispatch(editItemError(err));
  })
};

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (value) => ({
  type: TOGGLE_MODAL,
  value
});