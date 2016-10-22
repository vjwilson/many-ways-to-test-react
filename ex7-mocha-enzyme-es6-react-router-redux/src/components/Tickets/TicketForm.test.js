import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TicketForm from './TicketForm';
import mockSeatData from '../../../test/fixtures/mockSeatData';

describe('TicketForm component', function() {
  let mockPackage;

  beforeEach(function() {
    mockPackage = {
      seats: []
    };
  });

  describe('rendering', function() {

    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      expect(shallowOutput.hasClass('ticket-form')).to.be.true;
    });
  });

  describe('child components', function() {
    it('should include a totals line', function() {
      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const totalLine = shallowOutput.find('tfoot')

      expect(totalLine).to.have.lengthOf(1);
      expect(totalLine.text()).to.contain('Total');
    });

    it('should include include a submit button', function() {
      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const submitBtn = shallowOutput.find('button[type="submit"]')

      expect(submitBtn).to.have.lengthOf(1);
      expect(submitBtn.hasClass('btn-primary')).to.be.true;
    });

    it('should disable the submit button when no seats are selected', function() {
      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const submitBtn = shallowOutput.find('button[type="submit"]')

      expect(submitBtn.prop('disabled')).to.be.true;
    });

    it('should enable the submit button when seats are selected', function() {
      mockPackage.seats = mockSeatData[2].slice(0, 2);

      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const submitBtn = shallowOutput.find('button[type="submit"]')

      expect(submitBtn.prop('disabled')).not.to.be.true;
    });

    it('should show zero seats and zero price when no seats are selected', function() {
      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const totalSeats = shallowOutput.find('.ticket-form__total-seats')
      const totalPrice = shallowOutput.find('.ticket-form__total-price')

      expect(totalSeats.text()).to.equal('0');
      expect(totalPrice.text()).to.equal('$ 0');
    });

    it('should show total seats and price when seats are selected', function() {
      const seatCount = 2;
      mockPackage.seats = mockSeatData[2].slice(0, seatCount);

      const seatPrice = mockPackage.seats.map( el => el.price )
                                         .reduce( (a, b) => a + b );

      const shallowOutput = shallow(<TicketForm package={mockPackage} />);

      const totalSeats = shallowOutput.find('.ticket-form__total-seats')
      const totalPrice = shallowOutput.find('.ticket-form__total-price')

      expect(totalSeats.text()).to.equal(`${seatCount}`);
      expect(totalPrice.text()).to.equal(`$ ${seatPrice}`);
    });
  });

  describe('TicketForm component actions', function() {
    it('should pass down a supplied function which get called when form is submitted', function() {
      mockPackage.seats = mockSeatData[2].slice(0, 1);
      const buyTickets = sinon.spy();

      const formOutput = mount(<TicketForm package={mockPackage} buy={buyTickets} />);

      /**
       * You would think the following would work, but it doesn't,
       * because `simulate` doesn't really click a button,
       * it just fires an event programmatically, and a fake DOM won't
       * bubble the event up to the enclosing form
       *
          const submitBtn = mountedOutput.find('button[type="submit"]')
          submitBtn.simulate('click');
          expect(buyTickets.calledOnce).to.equal(true);
       */

      formOutput.simulate('submit');
      expect(buyTickets.calledOnce).to.equal(true);
    });
  });
});
