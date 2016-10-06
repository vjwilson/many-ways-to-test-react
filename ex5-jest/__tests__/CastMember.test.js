import React from 'react';
import renderer from 'react-test-renderer';
import CastMember from '../src/Cast/CastMember';

test('CastMember rendered static HTML', () => {
  const props = {
    member: {
      id: 3,
      name: 'Testy McTestFace',
      imageUrl: 'test-image.jpg',
      thumbnailUrl: 'test-image-small.jpg',
      bio: 'This is a test.'
    }
  };

  const component = renderer.create(
    <CastMember {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
