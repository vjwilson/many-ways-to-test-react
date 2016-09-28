var chai = require('chai');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var App = require('../src/App');
var Header = require('../src/Header');
var Jumbotron = require('../src/Jumbotron');
var CastMemberList = require('../src/CastMemberList');
var CastMember = require('../src/CastMember');

var expect = chai.expect;

function setup(props) {
  var initialCastMembers = props.initialCastMembers || [];
  var initialUser = props.initialUser || {};

  var tree = TestUtils.renderIntoDocument(<App initialCastMembers={initialCastMembers} initialUser={initialUser} />);

  return tree;
}

describe('App component', function() {
  var props = {
    initialCastMembers: [
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
      }
    ],
    initialUser: {
      id: 1,
      username: 'gmtester'
    }
  };

  it('should render the composite React component', function() {
    var tree = setup(props);

    expect(TestUtils.isCompositeComponent(tree)).to.be.true;

    expect(TestUtils.findRenderedDOMComponentWithClass(tree, 'container')).to.be.a('object');
  });

  it('should have props that match the array parameter', function() {
    var tree = setup(props);

    expect(tree.props.initialCastMembers).to.have.lengthOf(props.initialCastMembers.length);
  });

  it('should have state that matches the array parameter', function() {
    var tree = setup(props);

    expect(tree.state.castMembers).to.have.lengthOf(props.initialCastMembers.length);
    expect(tree.state.user).to.equal(props.initialUser);
  });

  describe('child components', function() {
    it('should have the appropriate children', function() {
      var tree = setup(props);

      var header = TestUtils.findRenderedComponentWithType(tree, Header);
      expect(TestUtils.isCompositeComponentWithType(header, Header)).to.be.true;

      var jumbotron = TestUtils.findRenderedComponentWithType(tree, Jumbotron);
      expect(TestUtils.isCompositeComponentWithType(jumbotron, Jumbotron)).to.be.true;

      var castMemberList = TestUtils.findRenderedComponentWithType(tree, CastMemberList);
      expect(TestUtils.isCompositeComponentWithType(castMemberList, CastMemberList)).to.be.true;
    });

    it('should pass the user prop to the header', function() {
      var tree = setup(props);

      var header = TestUtils.findRenderedComponentWithType(tree, Header);
      expect(header.props.user).to.equal(props.initialUser);
    });

    it('should have the appropriate number of cast members', function() {
      var tree = setup(props);

      var castMembers = TestUtils.scryRenderedComponentsWithType(tree, CastMember);
      expect(castMembers).to.have.lengthOf(props.initialCastMembers.length);
    });
  });
});
