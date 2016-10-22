import { expect } from 'chai';
import * as userActions from './userActions';
import * as types from './actionTypes';

describe('User Actions', () => {
  it('should log in a user', function() {
    const user = {
      id: 22,
      username: 'arminarlert'
    };

    const expectedAction = {
      type: types.LOGIN_USER_SUCCESS,
      user: user
    };

    const action = userActions.loginUserSuccess(user);

    expect(action).to.eql(expectedAction);
  });

  it('should log out a user', function() {
    const expectedAction = {
      type: types.LOGOUT_USER_SUCCESS,
    };

    const action = userActions.logoutUserSuccess();

    expect(action).to.eql(expectedAction);
  });
});