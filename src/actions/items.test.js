import {FETCH_ITEMS_REQUEST, FETCH_ITEMS_ERROR, 
        FETCH_ITEMS_SUCCESS, fetchItems,
        FETCH_ITEM_ERROR, FETCH_ITEM_REQUEST,
        FETCH_ITEM_SUCCESS, fetchItem, 
        ADD_ITEM_ERROR, ADD_ITEM_REQUEST, 
        ADD_ITEM_SUCCESS, addItem,
        EDIT_ITEM_ERROR, EDIT_ITEM_REQUEST,
        EDIT_ITEM_SUCCESS, editItem,
        DROP_ITEM_ERROR, DROP_ITEM_REQUEST,
        DROP_ITEM_SUCCESS, dropItem,
        dropItemError, dropItemRequest, dropItemSuccess,
        addItemError, addItemSuccess, addItemRequest,
        fetchItemError, fetchItemRequest, fetchItemSuccess,
        fetchItemsError, fetchItemsSuccess, fetchItemsRequest,
        editItemRequest, editItemSuccess, editItemError
} from './items';

import {API_BASE_URL} from '../config';

describe('fetchItemsRequest', ()=>{
  it('Should return the action', ()=>{
    const action = fetchItemsRequest();
    expect(action.type).toEqual(FETCH_ITEMS_REQUEST);
  });
});

describe('fetchItemsSuccess', ()=>{
  it('Should return the action', ()=>{
    const items = ['item 1', 'item 2'];
    const action = fetchItemsSuccess(items);
    expect(action.type).toEqual(FETCH_ITEMS_SUCCESS);
    expect(action.items).toEqual(items);
  });
});

describe('fetchItemsError', ()=>{
  it('Should return the action', ()=>{
    const err = 'Error message'
    const action = fetchItemsError(err);
    expect(action.type).toEqual(FETCH_ITEMS_ERROR);
    expect(action.error).toEqual(err);
  });
});


describe('fetchItemRequest', ()=>{
  it('Should return the action', ()=>{
    const action = fetchItemRequest();
    expect(action.type).toEqual(FETCH_ITEM_REQUEST);
  });
});

describe('fetchItemSuccess', ()=>{
  it('Should return the action', ()=>{
    const item = {item: 'item'};
    const action = fetchItemSuccess(item);
    expect(action.type).toEqual(FETCH_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });
});

describe('fetchItemError', ()=>{
  it('Should return the action', ()=>{
    const err = 'Error message'
    const action = fetchItemError(err);
    expect(action.type).toEqual(FETCH_ITEM_ERROR);
    expect(action.error).toEqual(err);
  });
});

describe('addItemRequest', ()=>{
  it('Should return the action', ()=>{
    const action = addItemRequest();
    expect(action.type).toEqual(ADD_ITEM_REQUEST);
  });
});

describe('addItemSuccess', ()=>{
  it('Should return the action', ()=>{
    const item = 'item 1';
    const action = addItemSuccess(item);
    expect(action.type).toEqual(ADD_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });
});

describe('addItemError', ()=>{
  it('Should return the action', ()=>{
    const err = 'some error';
    const action = addItemError(err);
    expect(action.type).toEqual(ADD_ITEM_ERROR);
    expect(action.error).toEqual(err);
  });
});

describe('editItemRequest', ()=>{
  it('Should return the action', ()=>{
    const action = editItemRequest();
    expect(action.type).toEqual(EDIT_ITEM_REQUEST);
  });
});

describe('editItemSuccess', ()=>{
  it('Should return the action', ()=>{
    const item = 'item 1';
    const action = editItemSuccess(item);
    expect(action.type).toEqual(EDIT_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });
});

describe('editItemError', ()=>{
  it('Should return the action', ()=>{
    const err = 'error message';
    const action = editItemError(err);
    expect(action.type).toEqual(EDIT_ITEM_ERROR);
    expect(action.error).toEqual(err);
  });
});

describe('dropItemRequest', ()=>{
  it('Should return the action', ()=>{
    const action = dropItemRequest();
    expect(action.type).toEqual(DROP_ITEM_REQUEST);
  });
});

describe('dropItemSuccess', ()=>{
  it('Should return the action', ()=>{
    const item = 'item 1';
    const action = dropItemSuccess(item);
    expect(action.type).toEqual(DROP_ITEM_SUCCESS);
    expect(action.id).toEqual(item);
  });
});

describe('dropItemError', ()=>{
  it('Should return the action', ()=>{
    const err = 'error message';
    const action = dropItemError(err);
    expect(action.type).toEqual(DROP_ITEM_ERROR);
    expect(action.error).toEqual(err);
  });
});

describe('fetchItems', ()=>{
  it('Should dispatch fetchItemsSuccess', ()=>{
    const items = 'some items';

    global.fetch = jest.fn().mockImplementation(()=>
      Promise.resolve({
        ok: true,
        json(){
          return items;
        }
      })
    );

      const dispatch = jest.fn();
      return fetchItems()(dispatch).then(()=>{
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/items`);
        expect(dispatch).toHaveBeenCalledWith(fetchItemsSuccess(items));
      });

  });
});

describe('fetchItem', ()=>{
  it('Should dispatch fetchItemSuccess', ()=>{
    const item = {
      id: 1234 
    };
    const id = 1234;

    global.fetch = jest.fn().mockImplementation(()=>
      Promise.resolve({
        ok: true,
        json(){
          return item;
        }
      })
    );

      const dispatch = jest.fn();
      return fetchItem(id)(dispatch).then(()=>{
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/items/${item.id}`);
        expect(dispatch).toHaveBeenCalledWith(fetchItemSuccess(item));
      });

  });
});

describe('editItem', ()=>{
  it('Should dispatch editItemSuccess', ()=>{
    const item = {
      id: 1234 
    };
  

    global.fetch = jest.fn().mockImplementation(()=>
      Promise.resolve({
        ok: true,
        json(){
          return item;
        }
      })
    );

    const res = {
      body: JSON.stringify(item),
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    const dispatch = jest.fn();
    return editItem(item)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/items/${item.id}`, res);
      expect(dispatch).toHaveBeenCalledWith(editItemSuccess(item));
    });

  });
});

describe('addItem', () => {
  it('Should dispatch addItemSuccess', () => {
    const item = {
      id: 1234
    };


    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return item;
        }
      })
    );

    const res = {
      body: JSON.stringify(item),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const dispatch = jest.fn();
    return addItem(item)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/items`, res);
      expect(dispatch).toHaveBeenCalledWith(addItemSuccess(item));
    });

  });
});

describe('dropItem', () => {
  it('Should dispatch dropItemSuccess', () => {
    const item = {
      id: 1234
    };


    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return item;
        }
      })
    );

    const res = {
      method: 'DELETE',
    }

    const dispatch = jest.fn();
    return dropItem(item.id)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/items/${item.id}`, res);
      expect(dispatch).toHaveBeenCalledWith(dropItemSuccess(item.id));
    });

  });
});
