import * as types from './actionTypes';

export function loginUserSuccess(user, credentials) {
  return {
    type: types.LOGIN_USER,
    user: user,
    credentials
  };
}

export function logoutUserSuccess(user) {
  return {
    type: types.LOGOUT_USER
  };
}
