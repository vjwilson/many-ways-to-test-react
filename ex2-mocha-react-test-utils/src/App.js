var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Jumbotron = require('./Jumbotron');
var CastMemberList = require('./CastMemberList');

var App = React.createClass({
  getInitialState: function() {
    return {
      castMembers: this.props.initialCastMembers,
      user: this.props.initialUser
    };
  },

  loginAction: function() {
    this.setState({ user: this.props.initialUser });;
  },

  logoutAction: function() {
    this.setState({ user: null });;
  },

  render: function() {
    return (
      <div className="container">
        <Header user={this.state.user} login={this.loginAction} logout={this.logoutAction} />
        <Jumbotron />
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">Top-Billed Cast</h2>
          </div>
          <div className="panel-body">
            <CastMemberList members = {this.state.castMembers} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
