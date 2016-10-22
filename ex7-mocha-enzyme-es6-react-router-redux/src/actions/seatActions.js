import * as types from './actionTypes';

// action functions
export function loadSeatsSuccess(seats) {
  return {
    type: types.LOAD_SEATS_SUCCESS,
    seats: seats
  };
}

export function selectSeatSuccess(seatNumber) {
  return {
    type: types.SELECT_SEAT_SUCCESS,
    seatNumber: seatNumber
  };
}

export function deselectSeatSuccess(seatNumber) {
  return {
    type: types.DESELECT_SEAT_SUCCESS,
    seatNumber: seatNumber
  };
}

export function markSeatSoldSuccess(seatNumber) {
  return {
    type: types.MARK_SEAT_SOLD_SUCCESS,
    seatNumber: seatNumber
  };
}

// dispatch functions
export function loadSeats() {
  return function(dispatch) {
    dispatch(selectSeatSuccess(seatNumber));
  };
}

export function selectSeat(seatNumber) {
  return function(dispatch) {
    dispatch(selectSeatSuccess(seatNumber));
  };
}

export function deselectSeat(seatNumber) {
  return function(dispatch) {
    dispatch(deselectSeatSuccess(seatNumber));
  };
}

export function markSeatSold(seatNumber) {
  return function(dispatch) {
    dispatch(markSeatSoldSuccess(seatNumber));
  };
}
