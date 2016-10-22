import React, {PropTypes} from 'react';
import Header from '../Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.route.initialUser
    };

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
        <Header user={this.state.user} login={this.loginAction} logout={this.logoutAction} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired

};

export default App;
