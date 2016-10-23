import * as types from '../actions/actionTypes';

export default function castMembersReducer(state = [], action) {
  let newState;

  switch(action.type) {
    case types.LOAD_CAST_MEMBERS_SUCCESS:
      return action.castMembers;
      break;

    default:
      return state;
  }
}
