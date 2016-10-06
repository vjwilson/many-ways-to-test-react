import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/Header/Header';

describe('Header', function() {
  let props;

  beforeEach(function() {
    props = {
      user: {
        id: 9,
        username: 'gmtester'
      },
      login: jest.fn(),
      logout: jest.fn()
    };
  });

  test('Header rendered static HTML', () => {
    const component = renderer.create(
      <Header {...props} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
