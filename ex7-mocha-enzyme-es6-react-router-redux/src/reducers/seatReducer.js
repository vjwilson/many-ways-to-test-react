import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function seatReducer(state = initialState.seats, action) {
  let newState;

  switch(action.type) {
    case types.LOAD_SEATS:
      return action.seats;
      break;

    case types.TOGGLE_SEAT_SELECTED:
      newState = state.map((row) => {
        return row.map((seat) => {
          if (seat.seatNumber === action.seat.seatNumber) {
            const updatedSeat = Object.assign({}, seat);
            updatedSeat.selected = !updatedSeat.selected;
            return updatedSeat;
          } else {
            return seat;
          }
        });
      });
      return newState;
      break;

    case types.MARK_SEAT_SOLD:
      newState = state.map((row) => {
        return row.map((seat) => {
          if (seat.seatNumber === action.seat.seatNumber) {
            const updatedSeat = Object.assign({}, seat);
            updatedSeat.selected = false;
            updatedSeat.sold = true;
            return updatedSeat;
          } else {
            return seat;
          }
        });
      });
      return newState;
      break;

    default:
      return state;
  }
}
