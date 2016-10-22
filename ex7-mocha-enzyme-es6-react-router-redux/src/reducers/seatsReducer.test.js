import { expect } from 'chai';
import seatsReducer from './seatsReducer';
import * as actions from '../actions/seatActions';
import mockSeatData from '../../test/fixtures/mockSeatData';
import * as types from '../actions/actionTypes';

describe('Seats reducer', function() {
  it('should load seats', function() {
    const initialState = [];
    const seats = mockSeatData;
    const action = {
      type: types.LOAD_SEATS_SUCCESS,
      seats: seats
    };

    const newState = seatsReducer(initialState, action);

    expect(newState).to.equal(seats);
  });

  it('should mark a seat as selected', function() {
    const initialState = JSON.parse(JSON.stringify(mockSeatData));
    const expectedState = JSON.parse(JSON.stringify(mockSeatData));
    expectedState[0][4].selected = true;

    const action = {
      type: types.SELECT_SEAT_SUCCESS,
      seatNumber: 'A5'
    };

    const newState = seatsReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });

  it('should mark a seat as selected', function() {
    const initialState = JSON.parse(JSON.stringify(mockSeatData));
    initialState[0][4].selected = true;

    const expectedState = JSON.parse(JSON.stringify(mockSeatData));
    expectedState[0][4].selected = false;

    const action = {
      type: types.DESELECT_SEAT_SUCCESS,
      seatNumber: 'A5'
    };

    const newState = seatsReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });

  it('should mark a seat as sold', function() {
    const initialState = JSON.parse(JSON.stringify(mockSeatData));
    const expectedState = JSON.parse(JSON.stringify(mockSeatData));
    expectedState[0][5].sold = true;

    const action = {
      type: types.MARK_SEAT_SOLD_SUCCESS,
      seatNumber: 'A6'
    };

    const newState = seatsReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });
});
