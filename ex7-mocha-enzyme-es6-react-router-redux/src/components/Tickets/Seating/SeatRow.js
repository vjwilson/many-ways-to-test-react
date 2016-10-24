import React from 'react';
import Seat from './Seat';

export default class SeatRow extends React.Component {

  constructor(props) {
    super(props);
  }

  getSeats() {
    let currentSeatOffset = this.props.offsetX;
    let currentRowOffset = this.props.offsetY;

    let seats = this.props.row.map((seat, index) => {
      let savedOffsetX = currentSeatOffset;
      currentSeatOffset += 40;
      if (index === 3 || index === 15) {
        currentSeatOffset += 80;
      }
      return (
        <Seat
          key={seat.seatNumber}
          offsetX={savedOffsetX}
          offsetY={currentRowOffset}
          seat={seat}
          onSeatClick={this.props.onSeatClick}
        />
      )
    });

    return seats;
  }

  render() {
    const seats = this.getSeats(this.props.row);

    return (
      <g className="seat-row">
        {seats}
       </g>
    )
  }
}

SeatRow.propTypes = {
  row: React.PropTypes.array.isRequired,
  offsetX: React.PropTypes.number.isRequired,
  offsetY: React.PropTypes.number.isRequired,
  onSeatClick: React.PropTypes.func
};

SeatRow.defaultProps = {
  row: [],
  offsetX: 0,
  offsetY: 0
};
