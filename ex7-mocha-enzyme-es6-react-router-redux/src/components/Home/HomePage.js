import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Jumbotron from '../Jumbotron/Jumbotron';
import CastMemberList from '../Cast/CastMemberList';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
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
            <CastMemberList members={this.props.castMembers} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    castMembers: state.castMembers
  };
}

export default connect(mapStateToProps)(HomePage);
