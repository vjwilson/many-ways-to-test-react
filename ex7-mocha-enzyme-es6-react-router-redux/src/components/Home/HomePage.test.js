import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { HomePage } from './HomePage';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

describe('HomePage component', function() {
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

  describe('rendering', function() {
    beforeEach(function() {
      props = {
        castMembers: mockInitialCastMembers
      }
    });

    it('should render the component (smoke test)', function() {

      const shallowOutput = shallow(<HomePage {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should render an element with correct classes', function() {
      const shallowOutput = shallow(<HomePage {...props} />);

      expect(shallowOutput.hasClass('home')).to.be.true;
    });
  });

  describe('child components', function() {
    beforeEach(function() {
      props = {
        castMembers: mockInitialCastMembers
      }
    });

    it('should have approriate children', function() {
      const shallowOutput = shallow(<HomePage {...props} />);

      expect(shallowOutput.find(Jumbotron)).to.be.an('object');
      expect(shallowOutput.find(CastMemberList)).to.be.an('object');
    });
  });
});
