import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import BuyTicketsPage from './BuyTicketsPage';
import SeatingChart from './Seating/SeatingChart';
import TicketForm from './TicketForm';
import mockSeatData from '../../test/fixtures/mockSeatData';

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
    it('should handle a form submission from its TicketForm component (manual test)', function() {
      routeObject.initialSeatData = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage route={routeObject} />);

      // manually set the state of selected seats and the package to buy
      let seatsToSelect = routeObject.initialSeatData[2].slice(0, 2);
      seatsToSelect[0].selected = true;
      seatsToSelect[1].selected = true;

      buyTicketsPage.setState({
        ticketPackage: {
          seats: seatsToSelect
        }
      });

      const ticketForm = buyTicketsPage.find('.ticket-form');

      ticketForm.simulate('submit');

      const seatArray = buyTicketsPage.state('seatData');
      const ticketPackage = buyTicketsPage.state('ticketPackage');

      expect(seatArray[2][0].sold).to.be.true;
      expect(seatArray[2][1].sold).to.be.true;
      expect(ticketPackage.seats).to.have.lengthOf(0);
    });

    it('should handle a form submission from its TicketForm component (automatic test)', function() {
      routeObject.initialSeatData = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage route={routeObject} />);

      // automatically set the state of our
      const pageInstance = buyTicketsPage.instance();

      pageInstance.updateSeatStatus('C1');
      pageInstance.updateSeatStatus('C2');

      const ticketForm = buyTicketsPage.find('.ticket-form');

      ticketForm.simulate('submit');

      const seatArray = buyTicketsPage.state('seatData');
      const ticketPackage = buyTicketsPage.state('ticketPackage');

      expect(seatArray[2][0].sold).to.be.true;
      expect(seatArray[2][1].sold).to.be.true;
      expect(ticketPackage.seats).to.have.lengthOf(0);
    });
  });
});
