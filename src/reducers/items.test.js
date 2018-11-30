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

  it('Should return the current state on an unknown action', ()=>{
    let currentState ={};
    const state = itemReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('fetchItems', ()=>{
    it('Should fetchItems and add them to state', ()=>{
      let currentState = {};
      const items = ['item 1', 'item 2'];
      const action = fetchItemsSuccess(items);
      const state = itemReducer(currentState, action);
      expect(state).toEqual({
        items: items,
        loading: false,
        error: null
      })
    });
  });

  describe('fetchItem', ()=>{
    it('Should fetchItem and add it as current expandedItem', ()=>{
      let currentState = {};
      const item = 'some item';
      const action = fetchItemSuccess(item);
      const state = itemReducer(currentState, action);
      expect(state).toEqual({
        loading: false,
        expandedItem: item,
        error: null
      });
    });
  });

  describe('addItem', ()=>{
    it('Should addItem to the list of items in state', ()=>{
      let currentState= {
        items: ['item1', 'item2']
      };
      const item = 'item3';
      const action = addItemSuccess(item);
      const state = itemReducer(currentState, action);
      expect(state).toEqual({
        loading: false,
        items: [...currentState.items, item],
        error: null
      });
    });
  });

  describe('editItem', () => {
    it('Should editItem in list of items in state', () => {
      let currentState = {
        items: [
          {
            id: '12345',
            name: 'item1'
          },
          {
            id: '23456',
            name: 'item2'
          }
        ]
      };

      let item = currentState.items[0];
      item = {
        id: item.id,
        name: 'edited item'
      };
      const action = editItemSuccess(item);
      const state = itemReducer(currentState, action);
      expect(state).toEqual({
        items: [{ id: '23456', name: 'item2' }, { id: '12345', name: 'edited item' }],
        loading: false,
        error: null
      });
    });
  });

  describe('dropItem', ()=>{
    it('Should drop item from list of items', ()=>{
      let item1 = {id: '12345', name:'item1'};
      let item2 = {id: '12346', name:'item2'};
      let item3 = {id: '12347', name:'item3'};
      let currentState={
        items: [item1, item2, item3]
      };
      let newState={
        items: [item1, item2],
        loading: false,
        error: null
      }
      let id = item3.id;
      const action = dropItemSuccess(id);
      const state = itemReducer(currentState, action);
      expect(state).toEqual(newState);
    });
  });

});
