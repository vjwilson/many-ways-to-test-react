import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Header from './Header';

describe('Header component', function() {
  // Technically, this could be declared `const`
  //   because we're just changing properties on it
  //   in order to different paths through the code,
  //   but I think of `const` has implying the underlying
  //   object won't change, while `let` implies it will change
  let props;

  beforeEach(function() {
    props = {
      user: null,
      login: function() {},
      logout: function() {}
    };
  });

  it('should render the static component', function() {
    // sanity-check test
    // does it "render without exploding"?
    // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874

    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render an element of the correct type', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput.type()).to.equal('nav');
  });

  it('should render an element with correct classes', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput.hasClass('navbar')).to.be.true;
    expect(shallowOutput.hasClass('navbar-default')).to.be.true;
  });

  it('should contain a responsive header', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput.find('.navbar-header')).to.be.ok;
  });

  it('should contain a login block', function() {
    // props.user is `null` by default
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    const loginBlock = shallowOutput.find('.login-block');

    expect(loginBlock).to.be.an('object');
  });

  describe('when there is NOT an authenticated user', function() {
    // props.user is `null` by default

    it('should contain a login prompt', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authMessage = shallowOutput.find('.login-block .navbar-text');

      expect(authMessage.text()).to.contain('Have an account?');
    });

    it('should contain a login link if no authenticated user', function() {
      // props.user is `null` by default
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.login-block .navbar-link');

      expect(authLink.type()).to.equal('a');
      expect(authLink.text()).to.contain('Login');
    });
  });

  describe('when there is an authenticated user', function() {
    beforeEach(function() {
      props.user = {
        id: 3,
        username: 'gmtester'
      };
    });

    it('should contain the username instead of a login prompt', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authMessage = shallowOutput.find('.login-block .navbar-text');

      expect(authMessage.text()).to.contain(props.user.username);
    });

    it('should contain a logout link', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.login-block .navbar-link');

      expect(authLink.type()).to.equal('a');
      expect(authLink.text()).to.contain('Logout');
    });
  });

  describe('calling the appropriate action props', function() {
    let loginAction;
    let logoutAction;

    beforeEach(function() {
      loginAction = sinon.spy();
      logoutAction = sinon.spy();

      props.login = loginAction;
      props.logout = logoutAction;
    });

    it('should call login function if no authenticated use', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.login-block .navbar-link');

      authLink.simulate('click');

      expect(loginAction.calledOnce).to.be.true;
    });

    it('should call logout function when there is an authenticated user', function() {
      props.user = {
        id: 3,
        username: 'gmtester'
      };
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.login-block .navbar-link');

      authLink.simulate('click');

      expect(logoutAction.calledOnce).to.be.true;
    });
  });
});
