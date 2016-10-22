import React from 'react';
import { Router, createMemoryHistory } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import routes from './routes';
import App from './components/App/App';
import HomePage from './components/Home/HomePage';
import BuyTicketsPage from './components/Tickets/BuyTicketsPage';
import Stage from './components/Tickets/Seating/Stage';

describe('routes', () => {

  describe('Home page', () => {
    const historyHome = createMemoryHistory('/');

    beforeEach(function() {
      this.component = mount(<Router routes={routes} history={historyHome} />);
    });

    it('App should be defined', function() {
      const app = this.component.find(App);

      expect(app).to.have.length(1);
    });

    it('HomePage should be defined', function() {
      const homePage = this.component.find(HomePage);

      expect(homePage).to.have.length(1);
    });

    it('should have a Jumbotron in its descendents', function() {
      const jumbotron = this.component.find('.jumbotron');

      expect(jumbotron).to.have.length(1);
    });
  });

  describe('Buy Tickets page', () => {
    const historyTickets = createMemoryHistory('/tickets');

    beforeEach(function() {
      this.component = mount(<Router routes={routes} history={historyTickets} />);
    });

    it('App should be defined', function() {
      const app = this.component.find(App);

      expect(app).to.have.length(1);
    });

    it('BuyTicketsPage should be defined', function() {
      const buyTicketsPage = this.component.find(BuyTicketsPage);

      expect(buyTicketsPage).to.have.length(1);
    });

    it('should have a Stage element in its descendents', function() {
      const stage = this.component.find(Stage);

      expect(stage).to.have.length(1);
    });
  });
});
