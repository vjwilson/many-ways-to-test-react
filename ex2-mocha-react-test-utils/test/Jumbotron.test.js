var chai = require('chai');
var React= require('react');
var TestUtils= require('react-addons-test-utils');
var Jumbotron= require('../src/Jumbotron');

var expect = chai.expect;

function setup() {

  var renderer = TestUtils.createRenderer();
  renderer.render(<Jumbotron />);
  var output = renderer.getRenderOutput();

  return output;
}

describe('Jumbotron component', () => {
  it('should render a div with the correct class', () => {
    var output = setup();

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('jumbotron');
  });

  it('should contain an h1', () => {
    var output = setup();

    var h1 = output.props.children.props.children[0];

    expect(h1.type).to.equal('h1');
    expect(h1.props.children).to.equal('Dogs: The Musical');
  });

  it('should render a link to buy tickets', () => {
    var output = setup();

    var callToAction = output.props.children.props.children[2].props.children;

    expect(callToAction.type).to.equal('a');
    expect(callToAction.props.className).to.equal('btn btn-primary');
    expect(callToAction.props.children).to.equal('Buy Tickets');
  });
});
