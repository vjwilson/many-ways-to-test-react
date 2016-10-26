import * as types from './actionTypes';

// action functions
export function loadSeats(seats) {
  return {
    type: types.LOAD_SEATS,
    seats: seats
  };
}

export function toggleSeatSelected(seat) {
  return {
    type: types.TOGGLE_SEAT_SELECTED,
    seat: seat
  };
}

export function markSeatSold(seat) {
  return {
    type: types.MARK_SEAT_SOLD,
    seat: seat
  };
}
