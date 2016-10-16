import React, {PropTypes} from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      castMembers: props.route.initialCastMembers.slice(0, 3)
    };
  }

  render() {
    return (
      <div className="home">
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

export default HomePage;
