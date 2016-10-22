import * as types from '../actions/actionTypes';

export default function seatsReducer(state = [], action) {
  let newState;

  switch(action.type) {
    case types.LOAD_SEATS_SUCCESS:
      return action.seats;
      break;

    case types.SELECT_SEAT_SUCCESS:
      newState = state.map((row) => {
        return row.map((seat) => {
          if (seat.seatNumber === action.seatNumber) {
            const updatedSeat = Object.assign({}, seat);
            updatedSeat.selected = true;
            return updatedSeat;
          } else {
            return seat;
          }
        });
      });
      return newState;
      break;

    case types.DESELECT_SEAT_SUCCESS:
      newState = state.map((row) => {
        return row.map((seat) => {
          if (seat.seatNumber === action.seatNumber) {
            const updatedSeat = Object.assign({}, seat);
            updatedSeat.selected = false;
            return updatedSeat;
          } else {
            return seat;
          }
        });
      });
      return newState;
      break;

    case types.MARK_SEAT_SOLD_SUCCESS:
      newState = state.map((row) => {
        return row.map((seat) => {
          if (seat.seatNumber === action.seatNumber) {
            const updatedSeat = Object.assign({}, seat);
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
