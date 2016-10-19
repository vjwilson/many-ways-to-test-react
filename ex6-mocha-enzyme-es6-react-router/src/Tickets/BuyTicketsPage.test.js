import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import BuyTicketsPage from './BuyTicketsPage';
import SeatingChart from './Seating/SeatingChart';
import TicketForm from './TicketForm';

describe('BuyTicketsPage component', function() {
  let routeObject;

  beforeEach(function() {
    routeObject = {
      initialSeatData: []
    };
  });

  describe('rendering', function() {

    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<BuyTicketsPage route={routeObject} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<BuyTicketsPage route={routeObject} />);

      expect(shallowOutput.hasClass('text-center')).to.be.true;
    });
  });

  describe('child components', function() {
    it('should include a page header', function() {
      const shallowOutput = shallow(<BuyTicketsPage route={routeObject} />);

      const pageHeader = shallowOutput.find('.page-header')

      expect(pageHeader).to.have.lengthOf(1);
      expect(pageHeader.text()).to.contain('Buy');
    });

    it('should include a seating chart', function() {
      const shallowOutput = shallow(<BuyTicketsPage route={routeObject} />);

      const seatingChart = shallowOutput.find(SeatingChart)

      expect(seatingChart).to.have.lengthOf(1);
      expect(seatingChart.props()).to.contain.keys(['width', 'height', 'onClick', 'seatData']);
    });

    it('should include a ticket form', function() {
      const shallowOutput = shallow(<BuyTicketsPage route={routeObject} />);

      const ticketForm = shallowOutput.find(TicketForm)

      expect(ticketForm).to.have.lengthOf(1);
      expect(ticketForm.props()).to.contain.keys(['package']);
    });
  });

  describe('BuyTicketsPage component actions', function() {

  });
});
