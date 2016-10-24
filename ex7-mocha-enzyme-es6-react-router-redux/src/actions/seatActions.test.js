import { expect } from 'chai';
import * as seatActions from './seatActions';
import * as types from './actionTypes';
import mockSeatData from '../../test/fixtures/mockSeatData';

describe('Seat Actions', () => {
  let seats;

  beforeEach(function() {
    seats = JSON.parse(JSON.stringify(mockSeatData));
  });

  it('should create an action for loading seats', function() {
    const expectedAction = {
      type: types.LOAD_SEATS,
      seats: seats
    };

    const action = seatActions.loadSeats(seats);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action for selecting a seat', function() {
    const seat = seats[0][2]; // mock seat A3

    const expectedAction = {
      type: types.TOGGLE_SEAT_SELECTED,
      seat: seat
    };

    const action = seatActions.toggleSeatSelected(seat);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action for marking a seat as sold', function() {
    const seat = seats[0][2]; // mock seat A3

    const expectedAction = {
      type: types.MARK_SEAT_SOLD,
      seat: seat
    };

    const action = seatActions.markSeatSold(seat);

    expect(action).to.eql(expectedAction);
  });
});

