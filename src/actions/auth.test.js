import {SET_AUTH_TOKEN, setAuthToken, clearAuth, CLEAR_AUTH, 
        authRequest, AUTH_REQUEST, AUTH_ERROR, authError,
        AUTH_SUCCESS, authSuccess,
        login, refreshAuthToken} from './auth';

describe('authRequest', ()=>{
  it('Should return the action', ()=>{
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSuccess', ()=>{
  it('Should return the action', ()=>{
    const user = 'some user';
    const action = authSuccess(user);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(user);
  });
});

describe('authError', ()=>{
  it('Should return the action', ()=>{
    const err = 'some error';
    const action = authError(err);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(err);
  });
});