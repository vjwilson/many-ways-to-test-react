import * as types from './actionTypes';

export function loginUser(userCredentials) {
  if (userCredentials.username && userCredentials.password) {
    return {
      type: types.LOGIN_USER,
      user: {
        id: 22,
        username: userCredentials.username
      }
    };
  } else {
    return {
      type: types.LOGIN_USER_FAILURE,
      user: {}
    };
  }
}

export function logoutUser(user) {
  return {
    type: types.LOGOUT_USER
  };
}
