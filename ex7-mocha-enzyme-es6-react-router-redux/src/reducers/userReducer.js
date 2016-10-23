import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return action.user;
      break;

    case types.LOGOUT_USER_SUCCESS:
      return {};
      break;

    default:
      return state;
  }
}
