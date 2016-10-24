import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function castMembersReducer(state = initialState.castMembers, action) {
  let newState;

  switch(action.type) {
    case types.LOAD_CAST_MEMBERS:
      return action.castMembers;
      break;

    default:
      return state;
  }
}
