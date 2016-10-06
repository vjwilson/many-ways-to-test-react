import React from 'react';
import renderer from 'react-test-renderer';
import CastMemberList from '../src/Cast/CastMemberList';

describe('CastMemberList', function() {
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

  test('CastMemberList rendered static HTML', () => {
    const component = renderer.create(
      <CastMemberList {...props} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
