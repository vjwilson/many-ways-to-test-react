import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import SeatRow from './SeatRow';
import Seat from './Seat';

describe.only('SeatRow component', function() {
  let row;

  beforeEach(function() {
    row = getInitialSeats();
  });

  it('should render a row of seats with the proper structure (smoke test)', () => {
    const shallowOutput = shallow(
      <SeatRow />
    );

    expect(shallowOutput).to.have.lengthOf(1);
    expect(shallowOutput.type()).to.equal('g');
  });

  it('should render a seat with the proper class', () => {
    const shallowOutput = shallow(
      <SeatRow />
    );

    expect(shallowOutput.hasClass('seat-row')).to.be.true;
  });

  it('should render as many seats as objects in its props array', () => {
    const shallowOutput = shallow(
      <SeatRow row={row} />
    );

    const seats = shallowOutput.find(Seat);

    expect(seats.length).to.equal(row.length);
  });

  it('should start rendering seats at the offsets given in its props', () => {
    const offsetX = 35;
    const offsetY = 120;

    const shallowOutput = shallow(
      <SeatRow
        row={row}
        offsetX={offsetX}
        offsetY={offsetY}
      />
    );

    const firstSeat = shallowOutput.find(Seat).first();

    expect(firstSeat.prop('offsetX')).to.equal(offsetX);
    expect(firstSeat.prop('offsetY')).to.equal(offsetY);
  });

  it('should leave a gap between seats', () => {
    const offsetX = 35;
    const offsetY = 120;

    const secondSeatX = offsetX + 40;

    const shallowOutput = shallow(
      <SeatRow
        row={row}
        offsetX={offsetX}
        offsetY={offsetY}
      />
    );

    const secondSeat = shallowOutput.find(Seat).at(1);

    expect(secondSeat.prop('offsetX')).to.equal(secondSeatX);
    expect(secondSeat.prop('offsetY')).to.equal(offsetY);
  });

  it('should leave an extra gap after the 4th and 16th seats', () => {
    const offsetX = 35;
    const offsetY = 120;

    const fifthSeatX = offsetX + (4 * 40) + 80;
    const seventeenthSeatX = offsetX + (16 * 40) + 80 + 80;

    const shallowOutput = shallow(
      <SeatRow
        row={row}
        offsetX={offsetX}
        offsetY={offsetY}
      />
    );

    const fifthSeat = shallowOutput.find(Seat).at(4);
    const seventeenthSeat = shallowOutput.find(Seat).at(16);

    expect(fifthSeat.prop('offsetX')).to.equal(fifthSeatX);
    expect(fifthSeat.prop('offsetY')).to.equal(offsetY);

    expect(seventeenthSeat.prop('offsetX')).to.equal(seventeenthSeatX);
    expect(seventeenthSeat.prop('offsetY')).to.equal(offsetY);
  });

  describe('click function handling', function() {
    let clickHandler;

    beforeEach(function() {
      clickHandler = sinon.spy();
    });

    it('should pass on the click handler to its member seats', function() {
      const shallowOutput = shallow(
        <SeatRow
          row={row}
          onClick={clickHandler}
        />
      );

      const seats = shallowOutput.find(Seat);

      expect(seats.everyWhere(s => s.prop('onClick') == clickHandler)).to.be.true;
    });

    it('should accept a click handler call from its children', function() {
      const mountedOutput = mount(
        <SeatRow
          row={row}
          onClick={clickHandler}
        />
      );

      const lastSeat = mountedOutput.find(Seat).last();
      const seatNumber = lastSeat.prop('seatNumber');

      lastSeat.simulate('click');

      expect(clickHandler.calledOnce).to.be.true;
      expect(clickHandler.calledWith(seatNumber)).to.be.true;
    });
  });
});

function getInitialSeats() {
  return [
    {
      seatNumber: 'A1',
      price: 32.00,
      sold: true
    },
    {
      seatNumber: 'A2',
      price: 32.00,
      sold: true
    },
    {
      seatNumber: 'A3',
      price: 32.00,
      sold: false,
      selected: false
    },
    {
      seatNumber: 'A4',
      price: 32.00,
      sold: false,
      selected: true
    },
    {
      seatNumber: 'A5',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A6',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A7',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A8',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A9',
      price: 44.00,
      sold: false
    },
    {
      seatNumber: 'A10',
      price: 44.00,
      sold: false
    },
    {
      seatNumber: 'A11',
      price: 44.00,
      sold: false
    },
    {
      seatNumber: 'A12',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A13',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A14',
      price: 44.00,
      sold: true
    },
    {
      seatNumber: 'A15',
      price: 44.00,
      sold: false
    },
    {
      seatNumber: 'A16',
      price: 44.00,
      sold: false
    },
    {
      seatNumber: 'A17',
      price: 32.00,
      sold: false
    },
    {
      seatNumber: 'A18',
      price: 32.00,
      sold: false
    }
  ];
}
