import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import SeatingChart from './SeatingChart';
import SeatRow from './SeatRow';
import Seat from './Seat';
import Stage from './Stage';
import mockSeatData from '../../../../test/fixtures/mockSeatData';

describe('SeatingChart component', function() {
  it('should render a seating chart', () => {
    const shallowRender = shallow(
      <SeatingChart seatData={[]} />
    );

    expect(shallowRender.type()).to.equal('svg');
  });

  it('should contain at least one group element', () => {
    const mountedWrapper = mount(
      <SeatingChart seatData={[]} />
    );
    const g = mountedWrapper.find('g')

    expect(g.length).to.be.above(0);
  });

  it('should have one Stage element', () => {
    const shallowRender = shallow(
      <SeatingChart seatData={[]} />
    );
    const stage = shallowRender.find(Stage)

    expect(stage).to.have.lengthOf(1);
  });

  it('should have a default width and height', () => {
    const defaultWidth = 1024;
    const defaultHeight = 640;

    const shallowRender = shallow(
      <SeatingChart seatData={[]} />
    );
    const width = shallowRender.prop('width')
    const height = shallowRender.prop('height')

    expect(width).to.equal(defaultWidth);
    expect(height).to.equal(defaultHeight);
  });

  it('should accept a custom width and height', () => {
    const customWidth = 800;
    const customHeight = 600;

    const shallowRender = shallow(
      <SeatingChart seatData={[]} width={customWidth} height={customHeight} />
    );
    const width = shallowRender.prop('width')
    const height = shallowRender.prop('height')

    expect(width).to.equal(customWidth);
    expect(height).to.equal(customHeight);
  });

  describe('rendering seats', function() {
    let seatData;

    beforeEach(function() {
       seatData = mockSeatData;
     });

    it('should have a SeatRow element for each array in seats prop', () => {
      const shallowRender = shallow(
        <SeatingChart seatData={seatData} />
      );
      const seatRows = shallowRender.find(SeatRow)

      expect(seatRows).to.have.lengthOf(seatData.length);
    });

  });
});
