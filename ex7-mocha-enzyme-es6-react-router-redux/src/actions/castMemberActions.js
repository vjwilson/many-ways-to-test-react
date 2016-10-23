import * as types from './actionTypes';

// action functions
export function loadCastMembersSuccess(castMembers) {
  return {
    type: types.LOAD_CAST_MEMBERS_SUCCESS,
    castMembers: castMembers
  };
}

// dispatch functions
export function loadCastMembers() {
  return function(dispatch) {
    dispatch(loadCastMembersSuccess(castMembers));
  };
}
