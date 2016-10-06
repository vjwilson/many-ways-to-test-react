import React, {PropTypes} from 'react';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      castMembers: this.props.initialCastMembers.slice(0, 3),
      user: this.props.initialUser
    };

    this.loginAction = this.loginAction.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }

  loginAction() {
    this.setState({ user: this.props.initialUser });;
  }

  logoutAction() {
    this.setState({ user: null });;
  }

  render() {
    return (
      <div className="container">
        <Header user={this.state.user} login={this.loginAction} logout={this.logoutAction} />
        <Jumbotron />
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">Top-Billed Cast</h2>
          </div>
          <div className="panel-body">
            <CastMemberList members={this.state.castMembers} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  initialCastMembers: PropTypes.array.isRequired,
  initialUser: PropTypes.object
};

export default App;
