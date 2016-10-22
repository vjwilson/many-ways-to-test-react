import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

describe('App component', function() {
  let props;

  const mockInitialUser = {
    id: 9,
    username: 'gmtester'
  };

  // WUT? believe it or not, this works with shallow()
  const mockChildren = (<div className="foo">Bar</div>);

  describe('when there is no user', function() {
    beforeEach(function() {
      props = {
        route: {
          initialUser: null
        },
        children: mockChildren
      };
    });

    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput.hasClass('container')).to.be.true;
    });

    it('should have state that matches the intial Props', function() {
      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput.state().user).to.be.null;
    });

    it('should have a section for its children', function() {
      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput.text()).to.contain('Bar');
    });
  });

  describe('when there are an initial user', function() {
    beforeEach(function() {
      props = {
        route: {
          initialUser: mockInitialUser
        },
        children: mockChildren
      };
    });

    it('should have the initial user in the state', function() {
      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput.state().user).to.deep.equal(mockInitialUser);
    });
  });

  describe('child components', function() {
    beforeEach(function() {
      props = {
        route: {
          initialUser: mockInitialUser
        },
        children: mockChildren
      };
    });

    it('should have approriate children', function() {
      const shallowOutput = shallow(<App {...props} />);

      expect(shallowOutput.find(Header)).to.be.an('object');
      expect(shallowOutput.find('.foo')).to.be.an('object');
    });
  });

  describe('App component actions', function() {
    beforeEach(function() {
      props = {
        route: {
          initialUser: mockInitialUser
        },
        children: mockChildren
      };
    });

    it('should respond to a logout click', function() {
      const mountOutput = mount(<App {...props} />);

      const authLink = mountOutput.find('.login-block .navbar-link');

      authLink.simulate('click'); // starts logged in, so logout

      expect(mountOutput.state().user).to.equal(null);
    });

    it('should respond to a login click', function() {
      const mountOutput = mount(<App {...props} />);

      const authLink = mountOutput.find('.login-block .navbar-link');

      authLink.simulate('click'); // starts logged in, logout first

      authLink.simulate('click'); // now try to log back in

      expect(mountOutput.state().user).to.equal(mockInitialUser);
    });
  });
});
