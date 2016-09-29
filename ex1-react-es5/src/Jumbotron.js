var React = require('react');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <div className="ghosted">
          <h1>Dogs: The Musical</h1>
          <p>“It’ll have you barking in your seat!”</p>
          <p><a href="#" className="btn btn-primary">Buy Tickets</a></p>
        </div>
      </div>
    );
  }
});

module.exports = Jumbotron;
