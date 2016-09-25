import chai from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CastMember from '../src/CastMember';

const expect = chai.expect;

function setup(props) {

  let renderer = TestUtils.createRenderer();
  renderer.render(<CastMember {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CastMember component', () => {
  let props = {
    member: {
      id: 3,
      name: 'Testy McTestbread',
      imageUrl: 'test-image.jpg',
      thumbnailUrl: 'test-image-small.jpg',
      bio: 'This is a test.'
    }
  };

  it('should render a div with correct class', () => {
    const {output} = setup(props);

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('media');
  });

  it('should contain two child divs with appropriate classes', () => {
    const {output} = setup(props);
    const firstChild = output.props.children[0];
    const secondChild = output.props.children[1];

    expect(firstChild.type).to.equal('div');
    expect(firstChild.props.className).to.equal('media-left');

    expect(secondChild.type).to.equal('div');
    expect(secondChild.props.className).to.equal('media-body');
  });
});
