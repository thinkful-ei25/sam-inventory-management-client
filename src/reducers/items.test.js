import itemReducer from './items';

import {fetchItems, fetchItemsError, fetchItemsRequest, fetchItemsSuccess,
        fetchItem, fetchItemError, fetchItemRequest, fetchItemSuccess,
        addItem, addItemError, addItemSuccess, addItemRequest,
        editItem, editItemError, editItemRequest, editItemSuccess,
        dropItem, dropItemError, dropItemSuccess, dropItemRequest} from '../actions/items';


describe('itemReducer', ()=>{



  it('Should set the initial state when nothing is passed in', ()=>{
    
    const state = itemReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      items: [],
      loading: false,
      error: null,
      expandedItem: null
    });

  });

});
