var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

var initialCastMembers = [
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
];
var initialUser = {
  id: 1,
  username: 'gmtester'
};

ReactDOM.render(
  <App initialCastMembers={initialCastMembers} initialUser={initialUser} />,
  document.getElementById('app')
);
