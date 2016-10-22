import { expect } from 'chai';
import userReducer from './userReducer';

describe('User reducer', function() {
  it('should login a user with valid username/password', function() {
    const initialState = {};
    const newUser = {
      id: 34,
      username: 'annieleonhart'
    };
    const action = {
      type: 'LOGIN_USER_SUCCESS',
      user: newUser
    };

    const newState = userReducer(initialState, action);

    expect(newState).to.equal(newUser);
  });

  it('should logout a user', function() {
    const initialState = {
      id: 72,
      username: 'erenyeager'
    };
    const action = {
      type: 'LOGOUT_USER_SUCCESS'
    };

    const newState = userReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql({});
  });

  it('should return current state for an unrecognized action', function() {
    const initialState = {
      id: 144,
      username: 'mikasaackerman'
    };
    const action = {
      type: 'WAG_DOG'
    };

    const newState = userReducer(initialState, action);

    expect(newState).to.equal(initialState);
  });
});
