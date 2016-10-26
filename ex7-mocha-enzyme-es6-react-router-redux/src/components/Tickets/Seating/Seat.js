import React from 'react';

export default class Seat extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.seat.sold) {
      this.props.onSeatClick(this.props.seat);
    }
  }

  drawSeat() {
    let d = [`m ${this.props.offsetX} ${this.props.offsetY}`];

    const collector = [];
    let currentX = 0;
    let currentY = this.props.height;
    collector.push(`l ${currentX} ${currentY}`);

    currentX = this.props.width;
    currentY = 0;
    collector.push(`l ${currentX} ${currentY}`);

    currentX = 0;
    currentY = -(this.props.height);
    collector.push(`l ${currentX} ${currentY}`);

    currentX = -(this.props.width);
    currentY = 0;
    collector.push(`l ${currentX} ${currentY}`);

    return d.concat(collector).join(' ');
  }

  getTextOffest() {
    return {
      textOffsetX: this.props.offsetX + (this.props.width / 2),
      textOffsetY: this.props.offsetY + (this.props.height * 0.6  )
    }
  }

  getColors() {
    let currentColor;
    let fillColor;

    if (this.props.seat.sold) {
      currentColor = "#999999";
      fillColor = "#f1f1f1";
    } else if (this.props.seat.selected) {
      currentColor = "#ffffff";
      fillColor = '#f10030';
    } else {
      currentColor = "#000000";
      fillColor = "#ffffff";
    }

    return {
      fillColor: fillColor,
      currentColor: currentColor
    };
  }

  render() {
    const d = this.drawSeat();
    const { textOffsetX, textOffsetY } = this.getTextOffest();
    const { currentColor, fillColor } = this.getColors();

    return (
      <g className="seat" onClick={this.handleClick}>
        <path d={d}
          stroke={currentColor}
          strokeWidth={1}
          fill={fillColor}
        />
        <text textAnchor="middle" x={textOffsetX} y={textOffsetY} fill={currentColor}>{this.props.seat.seatNumber}</text>
      </g>
    )
  }
}

Seat.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  offsetX: React.PropTypes.number.isRequired,
  offsetY: React.PropTypes.number.isRequired,
  seat: React.PropTypes.object.isRequired,
  onSeatClick: React.PropTypes.func
};

Seat.defaultProps = {
  height: 70,
  width: 35,
  offsetX: 0,
  offsetY: 0,
  seat: {}
};
