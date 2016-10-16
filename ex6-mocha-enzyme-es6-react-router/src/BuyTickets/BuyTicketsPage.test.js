import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import BuyTicketsPage from './BuyTicketsPage';

describe('BuyTicketsPage component', function() {
  describe('rendering', function() {
    beforeEach(function() {

    });

    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<BuyTicketsPage />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<BuyTicketsPage />);

      expect(shallowOutput.hasClass('text-center')).to.be.true;
    });
  });

  describe('child components', function() {

  });

  describe('BuyTicketsPage component actions', function() {

  });
});
