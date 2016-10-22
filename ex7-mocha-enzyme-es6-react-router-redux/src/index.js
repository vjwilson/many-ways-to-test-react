import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();

console.log(store.getState());

store.dispatch({ type: 'LOGIN_USER_SUCCESS', user: { id: 19, username: 'bigdaddy' } });
store.dispatch({ type: 'LOAD_SEATS_SUCCESS', seats: [[{ seatNumber: 'A1', sold: false }]] });
console.log(store.getState());

store.dispatch({ type: 'MARK_SEAT_SOLD_SUCCESS', seatNumber: 'A1' });
store.dispatch({ type: 'LOGOUT_USER_SUCCESS' });
console.log(store.getState());


render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
