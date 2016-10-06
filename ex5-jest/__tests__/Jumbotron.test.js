import React from 'react';
import renderer from 'react-test-renderer';
import Jumbotron from '../src/Jumbotron/Jumbotron';

test('Jumbotron rendered static HTML', () => {
  const component = renderer.create(
    <Jumbotron />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
