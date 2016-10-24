import * as types from './actionTypes';

// action functions
export function loadCastMembers(castMembers) {
  return {
    type: types.LOAD_CAST_MEMBERS,
    castMembers: castMembers
  };
}
