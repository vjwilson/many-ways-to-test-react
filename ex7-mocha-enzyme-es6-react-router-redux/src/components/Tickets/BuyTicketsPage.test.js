import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import  { BuyTicketsPage } from './BuyTicketsPage';
import SeatingChart from './Seating/SeatingChart';
import TicketForm from './TicketForm';
import mockSeatData from '../../../test/fixtures/mockSeatData';

describe('BuyTicketsPage component', function() {
  let props;

  beforeEach(function() {
    props = {
      seats: []
    };
  });

  describe('rendering', function() {
    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<BuyTicketsPage {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<BuyTicketsPage {...props} />);

      expect(shallowOutput.hasClass('text-center')).to.be.true;
    });
  });

  describe('child components', function() {
    it('should include a page header', function() {
      const shallowOutput = shallow(<BuyTicketsPage {...props} />);

      const pageHeader = shallowOutput.find('.page-header')

      expect(pageHeader).to.have.lengthOf(1);
      expect(pageHeader.text()).to.contain('Buy');
    });

    it('should include a seating chart', function() {
      const shallowOutput = shallow(<BuyTicketsPage {...props} />);

      const seatingChart = shallowOutput.find(SeatingChart)

      expect(seatingChart).to.have.lengthOf(1);
      expect(seatingChart.props()).to.contain.keys(['width', 'height', 'onClick', 'seatData']);
    });

    it('should include a ticket form', function() {
      const shallowOutput = shallow(<BuyTicketsPage {...props} />);

      const ticketForm = shallowOutput.find(TicketForm)

      expect(ticketForm).to.have.lengthOf(1);
      expect(ticketForm.props()).to.contain.keys(['package']);
    });
  });

  describe('BuyTicketsPage component actions', function() {
    it('should handle a form submission from its TicketForm component (manual test)', function() {
      props.seats = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage {...props} />);

      // manually set the state of selected seats and the package to buy
      let seatsToSelect = props.seats[2].slice(0, 2);
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
      props.seats = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage {...props} />);

      // automatically set the state of selected seats and the package to buy
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

    it('should handle selecting a seat from its seating chart component (the right way, using the component API)', function() {
      props.seats = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage {...props} />);


      // find the elements to act upon
      const seatC1 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() === 'C1');
      const seatC2 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() == 'C2');

      // act
      seatC1.simulate('click');
      seatC2.simulate('click');

      const seatArray = buyTicketsPage.state('seatData');
      const ticketPackage = buyTicketsPage.state('ticketPackage');

      // assert
      expect(seatArray[2][0].selected).to.be.true;
      expect(seatArray[2][1].selected).to.be.true;
      expect(ticketPackage.seats).to.have.lengthOf(2);
    });

    it('should handle deselecting a seat from its seating chart component (the right way, using the component API)', function() {
      props.seats = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage {...props} />);

      // find the elements to act upon
      const seatC1 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() === 'C1');
      const seatC2 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() == 'C2');

      // act
      // first clicks on each element should select them
      seatC1.simulate('click');
      seatC2.simulate('click');

      // second click on one of the elements should deselect them
      seatC1.simulate('click');

      const seatArray = buyTicketsPage.state('seatData');
      const ticketPackage = buyTicketsPage.state('ticketPackage');

      expect(seatArray[2][0].selected).to.be.false;
      expect(seatArray[2][1].selected).to.be.true;
      expect(ticketPackage.seats).to.have.lengthOf(1);
    });

    it('should handle selecting seats and checking out (the right way, using the component API)', function() {
      props.seats = JSON.parse(JSON.stringify(mockSeatData));

      const buyTicketsPage = mount(<BuyTicketsPage {...props} />);


      // find the elements to act upon
      const seatC1 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() === 'C1');
      const seatC2 = buyTicketsPage.findWhere(n => n.prop('sold') === false && n.text() == 'C2');
      const ticketForm = buyTicketsPage.find('.ticket-form');

      // act
      seatC2.simulate('click');
      seatC1.simulate('click');
      ticketForm.simulate('submit');

      const seatArray = buyTicketsPage.state('seatData');
      const ticketPackage = buyTicketsPage.state('ticketPackage');

      // assert
      expect(seatArray[2][0].selected).to.equal(false, 'first seat should no longer be selected');
      expect(seatArray[2][1].selected).to.equal(false, 'second seat should no longer be selected');
      expect(seatArray[2][0].sold).to.equal(true, 'first seat should now be sold');
      expect(seatArray[2][1].sold).to.equal(true, 'second seat should now be sold');
      expect(ticketPackage.seats).to.have.lengthOf(0, 'there should be no more seats ready to checkout');
    });
  });
});
