import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TicketForm from './TicketForm';

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
  });

  describe('TicketForm component actions', function() {

  });
});
