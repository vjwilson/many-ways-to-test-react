var chai = require('chai');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var CastMemberList = require('../src/CastMemberList');
var CastMember = require('../src/CastMember');

const expect = chai.expect;

function setup(members) {
  var memberList = members || [];

  var tree = TestUtils.renderIntoDocument(<CastMemberList members={members} />);

  return tree;
}

describe('CastMemberList component', () => {
  let props = {
    members: [
      {
        id: 3,
        name: 'Yul Brynner',
        imageUrl: 'yul-brynner.jpg',
        thumbnailUrl: 'yul-brynne-small.jpg',
        bio: 'Exotic leading man of American films, famed as much for his completely bald head as for his performances, Yul Brynner masked much of his life in mystery and outright lies designed to tease people he considered gullible.'
      },
      {
        id: 6,
        name: 'Deborah Kerr',
        imageUrl: 'deborah-kerr.jpg',
        thumbnailUrl: 'deborah-kerr-small.jpg',
        bio: 'Deborah Kerr was born on 30 September 1921 in Helensburgh, Scotland, the daughter of Captain Arthur Kerr-Trimmer.'
      }
    ]
  };

  it('should render a composite React component', () => {
    var tree = setup(props.members);

    expect(TestUtils.isCompositeComponent(tree)).to.be.true;

    expect(TestUtils.findRenderedDOMComponentWithClass(tree, 'member-list')).to.be.a('object');
  });

  it('should have props that match the array parameter', () => {
    var tree = setup(props.members);

    expect(tree.props.members).to.have.lengthOf(props.members.length);
  });

  it('should have correct number of child components', () => {
    var tree = setup(props.members);

    var numMediaObjects = TestUtils.scryRenderedComponentsWithType(tree, CastMember);

    expect(numMediaObjects).to.have.lengthOf(props.members.length);
  });
});
