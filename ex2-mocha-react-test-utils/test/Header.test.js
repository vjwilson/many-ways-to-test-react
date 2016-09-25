var chai = require('chai');
var React= require('react');
var TestUtils= require('react-addons-test-utils');
var ShallowTestUtils = require('react-shallow-testutils');
var Header= require('../src/Header');

var expect = chai.expect;

function setup(user) {
  var props = {
    user: user || undefined
  }

  var renderer = TestUtils.createRenderer();
  renderer.render(<Header user={props.user}/>);
  var output = renderer.getRenderOutput();

  return output;
}

describe('Header component', () => {
  var user = {
    id: 3,
    username: 'gmtester'
  };

  it('should render a nav with correct classes', () => {
    var output = setup();

    expect(output.type).to.equal('nav');
    expect(output.props.className).to.equal('navbar navbar-default');
  });

  it('should a login link if no authenticated user', () => {
    var output = setup();

    // var loginBlock = output.props.children.props.children[1].props.children[2].props.children;

    // expect(loginBlock[0].type).to.equal('li');
    // expect(loginBlock[0].props.children).to.equal('Have an account?');

    // expect(loginBlock[1].props.children.type).to.equal('a');
    // expect(loginBlock[1].props.children.props.className).to.equal('navbar-link');
    // expect(loginBlock[1].props.children.props.children).to.equal('Login');

    var loginBlock = ShallowTestUtils.findWithClass(output, 'login-block');

    expect(loginBlock.props.children[0].type).to.equal('li');
    expect(loginBlock.props.children[0].props.children).to.equal('Have an account?');

    expect(loginBlock.props.children[1].props.children.type).to.equal('a');
    expect(loginBlock.props.children[1].props.children.props.className).to.equal('navbar-link');
    expect(loginBlock.props.children[1].props.children.props.children).to.equal('Login');
  });

  it('should render a nav with username and logout link if user logged in', () => {
    var output = setup(user);

    var loginBlock = ShallowTestUtils.findWithClass(output, 'login-block');

    expect(loginBlock.props.children[0].props.children).to.equal('Welcome, ' + user.username);

    expect(loginBlock.props.children[1].props.children.props.children).to.equal('Logout');
  });
});
