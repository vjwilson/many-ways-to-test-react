import { expect } from 'chai';
import * as seatActions from './seatActions';
import * as types from './actionTypes';
import mockSeatData from '../../test/fixtures/mockSeatData';

describe('Seat Actions', () => {
  it('should create an action for loading seats', function() {
    const seats = mockSeatData;

    const expectedAction = {
      type: types.LOAD_SEATS_SUCCESS,
      seats: seats
    };

    const action = seatActions.loadSeatsSuccess(seats);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action for selecting a seat', function() {
    const seatNumber = 'A3';

    const expectedAction = {
      type: types.SELECT_SEAT_SUCCESS,
      seatNumber: seatNumber
    };

    const action = seatActions.selectSeatSuccess(seatNumber);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action for deselecting a seat', function() {
    const seatNumber = 'A4';

    const expectedAction = {
      type: types.DESELECT_SEAT_SUCCESS,
      seatNumber: seatNumber
    };

    const action = seatActions.deselectSeatSuccess(seatNumber);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action for marking a seat as sold', function() {
    const seatNumber = 'A3';

    const expectedAction = {
      type: types.MARK_SEAT_SOLD_SUCCESS,
      seatNumber: seatNumber
    };

    const action = seatActions.markSeatSoldSuccess(seatNumber);

    expect(action).to.eql(expectedAction);
  });
});