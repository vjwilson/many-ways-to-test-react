import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Avatar from '../lib/avatar';

describe('<Avatar/>', function () {
  describe('with shallow rendering', function() {
    let suppliedProps;
    let renderer;
    let output;

    beforeEach(function() {
      suppliedProps = {
        email: 'jdoe@example.com',
        src: 'http://www.example.com/images/jdoe.jpg'
      };

      renderer = TestUtils.createRenderer();
      renderer.render(<Avatar {...suppliedProps} />);
      output = renderer.getRenderOutput();
    });

    it('should have an image to display the gravatar', function () {
      const imgTag = output.props.children[1];
      expect(imgTag.type).to.equal('img');
    });

    it('should render the email prop in the child of the first child', function () {
      expect(output.props.children[0].props.children.props.children).to.equal(suppliedProps.email);
    });

    it('should render the src prop on the img tag', function () {
      expect(output.props.children[1].props.src).to.equal(suppliedProps.src);
    });
  });

  describe('with rendering into document', function() {
    let props;
    let component;

    beforeEach(function() {
      props = {
        email: 'jdoe@example.com',
        src: 'http://www.example.com/images/jdoe.jpg'
      };

      component = TestUtils.renderIntoDocument(<Avatar {...props} />);
    });

    it('should display the email', function () {
      const emailTag = TestUtils.findRenderedDOMComponentWithTag(component, 'em');
      expect(emailTag.textContent).to.equal(props.email);
    });

    it('should have an image to display the gravatar', function () {
      const singleImg = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
      expect(singleImg.src).to.equal(props.src);
      expect(singleImg.className).to.equal('img-rounded');
    });
  });
});