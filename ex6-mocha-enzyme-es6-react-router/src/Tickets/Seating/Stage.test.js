import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import Stage from './Stage';

describe'Stage component', function() {
  it('should render a seating chart', function() {
    const shallowRender = shallow(
      <Stage />
    );
    expect(shallowRender.type()).to.equal('g');
  });

  it('should contain exactly one path element', function() {
    const shallowRender = shallow(
      <Stage />
    );

    const path = shallowRender.find('path');

    expect(path).to.have.lengthOf(1);
  });

  it('should a path with default params', function() {
    const defaultWidth = 1024;
    const defaultHeight = 60;

    const shallowRender = shallow(
      <Stage />
    );

    const path = shallowRender.find('path');

    expect(path.prop('d')).to.contain(defaultWidth);
    expect(path.prop('d')).to.contain(defaultHeight);
  });

  it('should use explicit params', function() {
    const customWidth = 600;
    const customHeight = 90;

    const shallowRender = shallow(
      <Stage width={customWidth} height={customHeight} />
    );

    const path = shallowRender.find('path');

    expect(path.prop('d')).to.contain(customWidth);
    expect(path.prop('d')).to.contain(customHeight);
  });

  it('should contain exactly one text element', function() {
    const shallowRender = shallow(
      <Stage />
    );

    const text = shallowRender.find('text');

    expect(text).to.have.lengthOf(1);
    expect(text.text()).to.equal('Stage');
  });
});
