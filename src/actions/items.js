import {API_BASE_URL} from '../config';

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
  console.log(API_BASE_URL);
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