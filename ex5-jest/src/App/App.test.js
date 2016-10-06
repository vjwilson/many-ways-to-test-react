import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

describe('App component', function() {
  // Technically, this could be declared `const`
  //   because we're just changing properties on it
  //   in order to different paths through the code,
  //   but I think of `const` has implying the underlying
  //   object won't change, while `let` implies it will change
  let props;

  const mockInitialCastMembers = [
    {
      id: 1,
      name: 'A',
      imageUrl: 'a.jpg',
      thumbnailUrl: 'a-small.jpg',
      bio: 'A is an actor.'
    },
    {
      id: 2,
      name: 'B',
      imageUrl: 'b.jpg',
      thumbnailUrl: 'b-small.jpg',
      bio: 'B is a supporting actor.'
    },
    {
      id: 3,
      name: 'C',
      imageUrl: 'c.jpg',
      thumbnailUrl: 'c-small.jpg',
      bio: 'C is an understudy.'
    },
    {
      id: 4,
      name: 'D',
      imageUrl: 'd.jpg',
      thumbnailUrl: 'd-small.jpg',
      bio: 'D is an unnamed extra.'
    }
  ];
  const mockInitialUser = {
    id: 9,
    username: 'gmtester'
  };

  describe('when there is no user or castMembers', function() {
    beforeEach(function() {
      props = {
        initialUser: null,
        initialCastMembers: []
      };
    });

    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874

      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.hasClass('container')).to.be.true;
    });

    it('should have state that matches the intial Props', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.state().user).to.be.null;
      expect(shallowOutput.state().castMembers).to.have.lengthOf(0);
    });

    it('should have a section labeled for top-billed cast', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.text()).to.contain('Top-Billed Cast');
    });
  });

  describe('when there are an initial user and castMembers', function() {
    beforeEach(function() {
      props = {
        initialUser: mockInitialUser,
        initialCastMembers: mockInitialCastMembers
      };
    });

    it('should have the initial user in the state', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.state().user).to.deep.equal(mockInitialUser);
    });

    it('should only put the first 3 cast members in the state', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.state().castMembers).to.have.lengthOf(3);
    });
  });

  describe('child components', function() {
    beforeEach(function() {
      props = {
        initialUser: mockInitialUser,
        initialCastMembers: mockInitialCastMembers
      };
    });

    it('should have approriate children', function() {
      const shallowOutput = shallow(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      expect(shallowOutput.find(Header)).to.be.an('object');
      expect(shallowOutput.find(Jumbotron)).to.be.an('object');
      expect(shallowOutput.find(CastMemberList)).to.be.an('object');
    });
  });

  describe('App component actions', function() {
    beforeEach(function() {
      props = {
        initialUser: mockInitialUser,
        initialCastMembers: mockInitialCastMembers
      };
    });

    it('should respond to a logout click', function() {
      const mountOutput = mount(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      const authLink = mountOutput.find('.login-block .navbar-link');

      authLink.simulate('click'); // starts logged in, so logout

      expect(mountOutput.state().user).to.equal(null);
    });

    it('should respond to a login click', function() {
      const mountOutput = mount(<App initialCastMembers={props.initialCastMembers} initialUser={props.initialUser} />);

      const authLink = mountOutput.find('.login-block .navbar-link');

      authLink.simulate('click'); // starts logged in, logout first

      authLink.simulate('click'); // now try to log back in

      expect(mountOutput.state().user).to.equal(mockInitialUser);
    });
  });
});
