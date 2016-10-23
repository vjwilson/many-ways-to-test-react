import { expect } from 'chai';
import initialState from './initialState';

describe('initialState constants', () => {
  it('should supply an empty array of cast members', () => {
    expect(initialState.castMembers).to.be.an('array');
    expect(initialState.castMembers).to.have.lengthOf(0);
  });

  it('should supply an empty array of seats', () => {
    expect(initialState.seats).to.be.an('array');
    expect(initialState.seats).to.have.lengthOf(0);
  });

  it('should supply an empty user object', () => {
    expect(initialState.user).to.eql({});
  });
});
