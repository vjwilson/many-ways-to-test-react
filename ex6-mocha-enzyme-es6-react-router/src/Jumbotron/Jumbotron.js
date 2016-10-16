import React from 'react';
import { Link } from 'react-router';

const Jumbotron = (() => {
  return (
    <div className="jumbotron">
      <div className="ghosted">
        <h1>Dogs: The Musical</h1>
        <p>“It’ll have you barking in your seat!”</p>
        <p><Link to="/tickets" className="btn btn-primary btn-lg">Buy Tickets</Link></p>
      </div>
    </div>
  );
});

export default Jumbotron;
