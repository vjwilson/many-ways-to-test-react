import { expect } from 'chai';
import seatReducer from './seatReducer';
import * as actions from '../actions/seatActions';
import mockSeatData from '../../test/fixtures/mockSeatData';
import * as types from '../actions/actionTypes';

describe.only('Seat reducer', function() {
  let seats;

  beforeEach(function() {
    seats = JSON.parse(JSON.stringify(mockSeatData));
  });

  it('should load seats', function() {
    const initialState = [];
    const action = actions.loadSeats(seats);

    const newState = seatReducer(initialState, action);
    const expectedSeats = JSON.parse(JSON.stringify(mockSeatData));

    expect(newState).to.eql(expectedSeats);
  });

  it('should mark a seat as selected', function() {
    const initialState = seats;
    const seat = initialState[0][2]; // mock seat A3

    const expectedState = JSON.parse(JSON.stringify(initialState));
    expectedState[0][2].selected = true;

    const action = actions.toggleSeatSelected(seat);

    const newState = seatReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });

  it('should mark a seat as deselected', function() {
    const initialState = seats;
    const seat = seats[0][2]; // mock seat A3
    seat.selected = true;

    const expectedState = JSON.parse(JSON.stringify(initialState));
    expectedState[0][2].selected = false;

    const action = actions.toggleSeatSelected(seat);

    const newState = seatReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });

  it('should mark a seat as sold', function() {
    const initialState = seats;
    const seat = seats[0][2]; // mock seat A3
    seat.selected = true;

    const expectedState = JSON.parse(JSON.stringify(seats));
    expectedState[0][2].sold = true;
    expectedState[0][2].selected = false;

    const action = actions.markSeatSold(seat);

    const newState = seatReducer(initialState, action);

    // .eql instead of .equal,
    // to compare the contents, instead of the reference
    expect(newState).to.eql(expectedState);
  });
});
