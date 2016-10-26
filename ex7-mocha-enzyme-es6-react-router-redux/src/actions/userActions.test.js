import { expect } from 'chai';
import * as userActions from './userActions';
import * as types from './actionTypes';

describe('User Actions', () => {
  it('should log in a user with good credentials', function() {
    const userCredentials = {
      username: 'arminarlert',
      password: 'monkey'
    };

    const expectedUser = {
      id: 22,
      username: userCredentials.username
    };

    const expectedAction = {
      type: types.LOGIN_USER,
      user: expectedUser
    };

    const action = userActions.loginUser(userCredentials);

    expect(action).to.eql(expectedAction);
  });

  it('should NOT log in a user with bad credentials', function() {
    const userCredentials = {
      username: 'arminarlert',
      password: ''
    };

    const expectedAction = {
      type: types.LOGIN_USER_FAILURE,
      user: {}
    };

    const action = userActions.loginUser(userCredentials);

    expect(action).to.eql(expectedAction);
  });

  it('should log out a user', function() {
    const expectedAction = {
      type: types.LOGOUT_USER,
    };

    const action = userActions.logoutUser();

    expect(action).to.eql(expectedAction);
  });
});