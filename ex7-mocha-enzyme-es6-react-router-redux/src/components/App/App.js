import React, {PropTypes} from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.loginAction = this.loginAction.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }

  loginAction() {
    this.setState({
      user: this.props.route.initialUser
    });
  }

  logoutAction() {
    this.setState({ user: null });;
  }

  render() {
    return (
      <div className="container">
        <Header user={this.props.user} login={this.loginAction} logout={this.logoutAction} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired

};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
