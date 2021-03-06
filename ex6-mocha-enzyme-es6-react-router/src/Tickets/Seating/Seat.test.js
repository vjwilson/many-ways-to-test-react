import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Seat from './Seat';

describe('Seat component', function() {
  it('should render a seat with the proper structure (smoke test)', () => {
    const shallowOutput = shallow(
      <Seat />
    );

    expect(shallowOutput).to.have.lengthOf(1);
    expect(shallowOutput.type()).to.equal('g');
  });

  it('should render a seat with the proper class', () => {
    const shallowOutput = shallow(
      <Seat />
    );

    expect(shallowOutput.hasClass('seat')).to.be.true;
  });

  it('should render a seat with default props', () => {
    const component = shallow(
      <Seat />
    );
    const path = component.find('path')

    expect(path.prop('d')).to.equal('m 0 0 l 0 70 l 35 0 l 0 -70 l -35 0');
  });

  it('should render a seat with custom offset props', () => {
    const offsetX = 15;
    const offsetY = 30;

    const component = shallow(
      <Seat
        offsetX={offsetX}
        offsetY={offsetY}
      />
    );
    const path = component.find('path')

    expect(path.prop('d')).to.equal('m 15 30 l 0 70 l 35 0 l 0 -70 l -35 0');
  });

  it('should render a seat with custom width and height props', () => {
    const component = shallow(
      <Seat
        height={50}
        width={25}
      />
    );
    const path = component.find('path')

    expect(path.prop('d')).to.equal('m 0 0 l 0 50 l 25 0 l 0 -50 l -25 0');
  });

  it('should render a seat with custom seat number prop', () => {
    const component = shallow(
      <Seat
        seatNumber="B6"
      />
    );
    const seatText = component.find('text')

    expect(seatText.text()).to.equal('B6');
  });

  describe('the dynamic colors of the seat', function() {
    it('should render the correct colors for an available seat', () => {
      const currentColor = '#000000';
      const fillColor = '#ffffff';

      const component = shallow(
        <Seat
        />
      );
      const rect = component.find('path')
      const seatText = component.find('text')

      expect(rect.prop('stroke')).to.equal(currentColor);
      expect(rect.prop('fill')).to.equal(fillColor);
      expect(seatText.prop('fill')).to.equal(currentColor);
    });

    it('should render the correct colors for a selected seat', () => {
      const currentColor = '#ffffff';
      const fillColor = '#f10030';

      const component = shallow(
        <Seat
          selected={true}
        />
      );
      const rect = component.find('path')
      const seatText = component.find('text')

      expect(rect.prop('stroke')).to.equal(currentColor);
      expect(rect.prop('fill')).to.equal(fillColor);
      expect(seatText.prop('fill')).to.equal(currentColor);
    });

    it('should render the correct colors for a sold seat', () => {
      const currentColor = '#999999';
      const fillColor = '#f1f1f1';

      const component = shallow(
        <Seat
          sold={true}
        />
      );
      const rect = component.find('path')
      const seatText = component.find('text')

      expect(rect.prop('stroke')).to.equal(currentColor);
      expect(rect.prop('fill')).to.equal(fillColor);
      expect(seatText.prop('fill')).to.equal(currentColor);
    });
  });

  describe('its behavior when clicked', function() {
    let clickHandler;

    beforeEach(function() {
      clickHandler = sinon.spy();
    });

    it('should call its clickHandler with the seat number', function() {
      const seatNumber = 'C4';

      const shallowOutput = shallow(
        <Seat
          seatNumber={seatNumber}
          onClick={clickHandler}
        />
      );

      shallowOutput.simulate('click');

      expect(clickHandler.calledOnce).to.be.true;
      expect(clickHandler.calledWith(seatNumber)).to.be.true;
    });

  });
});
