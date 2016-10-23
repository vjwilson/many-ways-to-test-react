import { expect } from 'chai';
import castMembersReducer from './castMembersReducer';
import * as actions from '../actions/castMemberActions';
import mockCastMemberData from '../../test/fixtures/mockCastMemberData';
import * as types from '../actions/actionTypes';

describe('Seats reducer', function() {
  it('should load cast members', function() {
    const initialState = [];
    const castMembers = mockCastMemberData;
    const action = {
      type: types.LOAD_CAST_MEMBERS_SUCCESS,
      castMembers: castMembers
    };

    const newState = castMembersReducer(initialState, action);

    expect(newState).to.equal(castMembers);
  });
});
