import * as types from './actionTypes';

export function loginUserSuccess(user) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    user: user
  };
}

export function logoutUserSuccess(user) {
  return {
    type: types.LOGOUT_USER_SUCCESS
  };
}

export function authLoginUser(credentials) {
  return function(dispatch) {
    if (credentials &&
        credentials.username &&
        credentials.password) {
      const user = {
        id: 22,
        username: credentials.username
      };

      dispatch(loginUserSuccess(user));
    }
  };
}

export function authLogoutUser() {
  return function(dispatch) {
    dispatch(logoutUserSuccess());
  };
}
