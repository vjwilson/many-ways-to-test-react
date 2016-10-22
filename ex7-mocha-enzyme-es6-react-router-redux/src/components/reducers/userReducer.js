export default function userReducer(state = {}, action) {
  switch(action.type) {
    case 'LOGIN_USER_SUCCESS':
      return action.user;
      break;

    case 'LOGOUT_USER_SUCCESS':
      return {};
      break;

    default:
      return state;
  }
}
