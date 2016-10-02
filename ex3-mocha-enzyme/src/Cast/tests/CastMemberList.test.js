import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import CastMemberList from '../CastMemberList';
import CastMember from '../CastMember';

function setup(members) {
  const memberList = members || [];

  const tree = TestUtils.renderIntoDocument(<CastMemberList members={members} />);

  return tree;
}

describe('CastMemberList component', function() {
  let props;

  beforeEach(function() {
    props = {
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
  });

  it('should render the composite React component', function() {
    // sanity-check test
    // does it "render without exploding"?
    // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874

    const output = shallow(<CastMemberList members={props.members} />);

    expect(output).to.have.length(1);
  });

  it('should render an element with the correct class', function() {
    const output = shallow(<CastMemberList members={props.members} />);

    expect(output.hasClass('member-list')).to.be.true;
  });

  it('should have correct number of child components', function() {
    const output = shallow(<CastMemberList members={props.members} />);

    const castMembers = output.children(CastMember);

    expect(castMembers.length).to.equal(props.members.length);
  });
});
