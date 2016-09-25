import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import CastMemberList from './CastMemberList';

const App = React.createClass({
  getInitialState: function() {
    return {
      castMembers: [
        {
          id: 1,
          name: 'Rex',
          imageUrl: 'collie-yawning-a97c4a1614b53d6f55ae2464b06ba6aa.jpg',
          thumbnailUrl: 'collie-yawning-64x64.jpg',
          bio: 'Rex is an up-and-coming actor.'
        },
        {
          id: 2,
          name: 'Sally',
          imageUrl: 'collie-yawning-a97c4a1614b53d6f55ae2464b06ba6aa.jpg',
          thumbnailUrl: 'sally-night-64x64.jpg',
          bio: 'Sally is the sweetheart child star in her first grown-up role.'
        }
      ],
      user: {
        id: 1,
        username: 'gmtester'
      }
    };
  },

  render: function() {
    return (
      <div className="container">
        <Header />
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

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

