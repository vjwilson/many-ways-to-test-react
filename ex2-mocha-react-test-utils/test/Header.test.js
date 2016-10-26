var chai = require('chai');
var sinon = require('sinon');
var React= require('react');
var TestUtils= require('react-addons-test-utils');
var ShallowTestUtils = require('react-shallow-testutils');
var Header= require('../src/Header');

var expect = chai.expect;

function setup(props) {
  var props = {
    user: props.user || undefined,
    login: props.login,
    logout: props.logout
  }

  var renderer = TestUtils.createRenderer();
  renderer.render(<Header user={props.user} login={props.login} logout={props.logout} />);
  var output = renderer.getRenderOutput();

  return output;
}

describe('Header component', () => {
  var user;
  var loginAction;
  var logoutAction;
  var props;

  beforeEach(function() {
    user = {
      id: 3,
      username: 'gmtester'
    };
    loginAction = sinon.spy();
    logoutAction = sinon.spy();

    props = {
      login: loginAction,
      logout: logoutAction
    }
  });

  it('should render a nav with correct classes', () => {
    var output = setup(props);

    expect(output.type).to.equal('nav');
    expect(output.props.className).to.equal('navbar navbar-default');
  });

  it('should a login link if no authenticated user', () => {
    var output = setup(props);

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
    props.user = user;
    var output = setup(props);

    var loginBlock = ShallowTestUtils.findWithClass(output, 'login-block');

    expect(loginBlock.props.children[0].props.children).to.equal('Welcome, ' + user.username);
    expect(loginBlock.props.children[1].props.children.props.children).to.equal('Logout');

    var navbarText = ShallowTestUtils.findWithClass(output, 'navbar-text');
    var navbarLink = ShallowTestUtils.findWithClass(output, 'navbar-link');
    expect(navbarText.props.children).to.equal('Welcome, ' + user.username);
    expect(navbarLink.props.children).to.equal('Logout');
  });

  describe('Header actions', function() {
    it('should call login function if no authenticated user', () => {
      props.user = null;
      var output = TestUtils.renderIntoDocument(<Header user={props.user} login={props.login} logout={props.logout} />);

      var loginLink = TestUtils.findRenderedDOMComponentWithClass(output, 'navbar-link');

      TestUtils.Simulate.click(loginLink);

      expect(loginAction.calledOnce).to.be.true
    });

    it('should call logout function if user logged in', () => {
      props.user = user;
      var output = TestUtils.renderIntoDocument(<Header user={props.user} login={props.login} logout={props.logout} />);

      var logoutLink = TestUtils.findRenderedDOMComponentWithClass(output, 'navbar-link');

      TestUtils.Simulate.click(logoutLink);

      expect(logoutAction.calledOnce).to.be.true
    });
  });
});
