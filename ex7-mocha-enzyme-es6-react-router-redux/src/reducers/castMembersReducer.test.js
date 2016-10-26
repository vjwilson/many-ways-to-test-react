import { expect } from 'chai';
import castMembersReducer from './castMembersReducer';
import mockCastMemberData from '../../test/fixtures/mockCastMemberData';
import * as types from '../actions/actionTypes';

describe('CastMembers reducer', function() {
  it('should load cast members', function() {
    const initialState = [];
    const castMembers = mockCastMemberData;
    const action = {
      type: types.LOAD_CAST_MEMBERS,
      castMembers: castMembers
    };

    const newState = castMembersReducer(initialState, action);

    expect(newState).to.equal(castMembers);
  });
});
