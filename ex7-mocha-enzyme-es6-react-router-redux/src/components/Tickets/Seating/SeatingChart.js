import React from 'react';
import SeatRow from './SeatRow';
import Stage from './Stage';

export default class SeatingChart extends React.Component {

  render() {
    const startOffsetX = 35;
    const startOffsetY = 100;

    const seatRows = this.props.seatData.map((row, index) => {
      let currentOffsetY = startOffsetY + (index * 80);
      return (<SeatRow key={index} row={row} offsetX={startOffsetX} offsetY={currentOffsetY} onSeatClick={this.props.onSeatClick} />);
    });

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Stage />
        {seatRows}
      </svg>
    );
  }
}

SeatingChart.propTypes = {
  seatData: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onSeatClick: React.PropTypes.func
};

SeatingChart.defaultProps = {
  width: 1024,
  height: 640
};
