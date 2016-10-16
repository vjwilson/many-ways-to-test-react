import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';  //eslint-disable-line import/no-named-as-default
import HomePage from './Home/HomePage';
import BuyTicketsPage from './BuyTickets/BuyTicketsPage';
import initialCastMembers from './castMemberData.js';
import initialUser from './initialUserData';

export default (
  <Route path="/" initialUser={initialUser} component={App}>
    <IndexRoute initialCastMembers={initialCastMembers} component={HomePage} />
    <Route path="tickets" component={BuyTicketsPage} />
  </Route>
);
