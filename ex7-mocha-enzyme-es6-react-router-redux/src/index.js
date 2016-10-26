import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadCastMembers} from './actions/castMemberActions';
import {loadSeats} from './actions/seatActions';
import initialCastMembers from './castMemberData.js';
import initialSeats from './seatData.js';

const store = configureStore();

store.dispatch(loadCastMembers(initialCastMembers));
store.dispatch(loadSeats(initialSeats));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
