import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App/App';

describe('App', function() {
  let props;

  beforeEach(function() {
    props = {
      initialUser: {
        id: 9,
        username: 'gmtester'
      },
      initialCastMembers: [
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

  test('App rendered static HTML', () => {
    const component = renderer.create(
      <App {...props} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
