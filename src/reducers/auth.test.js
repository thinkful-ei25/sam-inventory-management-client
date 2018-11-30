import {setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';

import authReducer from './auth';

describe('authReducer', ()=>{

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    })
  });

  it('Should return the state with an unrecognized action', ()=>{
    const currentState = {currentUser:'some user'};
    const state = authReducer(currentState, {type: '__UNKOWN'});
    expect(state).toEqual(currentState);
  });

  describe('setAuthToken', ()=>{
    it('Should set the AuthToken', ()=>{
      const currentState = {};
      const action = setAuthToken('authToken');
      const state = authReducer(currentState, action);
      expect(state).toEqual({authToken: 'authToken'});
    });
  });

  describe('clearAuth', ()=>{
    it('Should clear the AuthToken', ()=>{
      const currentState = {authToken: 'token', currentUser:'user'};
      const action = clearAuth();
      const state = authReducer(currentState, action);
      expect(state).toEqual({authToken: null, currentUser:null});
    });
  });

  describe('authSuccess', ()=>{
    it('Should set the AuthToken', ()=>{
      const currentState={};
      const action = authSuccess('user');
      const state = authReducer(currentState, action);
      expect(state).toEqual({loading: false ,currentUser: 'user'});
    });
  });

});