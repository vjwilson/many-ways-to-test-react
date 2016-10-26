import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';  //eslint-disable-line import/no-named-as-default
import HomePage from './components/Home/HomePage';
import BuyTicketsPage from './components/Tickets/BuyTicketsPage';
import initialCastMembers from './castMemberData.js';
import initialUser from './initialUserData';
import seatData from './seatData';

export default (
  <Route path="/" initialUser={initialUser} component={App}>
    <IndexRoute component={HomePage} />
    <Route path="tickets" component={BuyTicketsPage} />
  </Route>
);
