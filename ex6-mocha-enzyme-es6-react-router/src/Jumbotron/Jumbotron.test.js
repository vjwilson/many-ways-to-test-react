import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Jumbotron from './Jumbotron';
import { Link } from 'react-router';

describe('Jumbotron component', function() {
  it('should render a React component', function() {
    const shallowOutput = shallow(<Jumbotron />);

    expect(shallowOutput).to.have.lengthOf(1);
  });

  it('should render an element with the correct class', function() {
    const shallowOutput = shallow(<Jumbotron />);

    expect(shallowOutput.hasClass('jumbotron')).to.be.true;
  });

  it('should render a link to buy tickets', function() {
    const mountedOutput = mount(<Jumbotron />);

    const callToAction = mountedOutput.find(Link);

    expect(callToAction.prop('className')).to.equal('btn btn-primary btn-lg');
    expect(callToAction.prop('to')).to.equal('/tickets');
    expect(callToAction.text()).to.contain('Buy');
  });
});
