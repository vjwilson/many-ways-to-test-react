import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CastMember from '../CastMember';

describe('CastMember component', function() {
  let props;

  beforeEach(function() {
    props = {
      member: {
        id: 3,
        name: 'Testy McTestFace',
        imageUrl: 'test-image.jpg',
        thumbnailUrl: 'test-image-small.jpg',
        bio: 'This is a test.'
      }
    };
  });

  it('should render the static component', function() {
    // sanity-check test
    // does it "render without exploding"?
    // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874

    const shallowOutput = shallow(<CastMember member={props.member} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render an element with correct class', function() {
    const shallowOutput = shallow(<CastMember member={props.member} />);

    expect(shallowOutput.hasClass('media')).to.be.true;
  });

  it('should contain two child elements with appropriate classes', function() {
    const shallowOutput = shallow(<CastMember member={props.member} />);

    // a more clever way to write `shallowOutput.children('some_selector')`
    const firstChild = shallowOutput.find('> .media-left');
    const secondChild = shallowOutput.find('> .media-body');

    expect(firstChild).to.have.length(1);
    expect(secondChild).to.have.length(1);
  });

  it('should render the cast member name in a heading, test version 1', function() {
    const mountedOutput = mount(<CastMember member={props.member} />);
    const heading = mountedOutput.find('.media-heading');

    // we're working in the virtual DOM, so we have to render it into an actual DOM Node, then check its text content
    const headingDOMNode = heading.render();
    expect(headingDOMNode.text()).to.equal(props.member.name);
  });

  it('should render the cast member name in a heading, test version 2', function() {
    const renderedOutput = render(<CastMember member={props.member} />);
    const headingDOMNode = renderedOutput.find('.media-heading');

    expect(headingDOMNode.text()).to.equal(props.member.name);
  });
});
