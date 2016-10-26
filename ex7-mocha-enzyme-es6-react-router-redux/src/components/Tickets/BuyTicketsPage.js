import React from 'react';
import { connect } from 'react-redux';
import SeatingChart from './Seating/SeatingChart';
import TicketForm from './TicketForm';
import { bindActionCreators } from 'redux';
import * as seatActions from '../../actions/seatActions';
import { getSelectedSeats } from '../../selectors/selectors';

export class BuyTicketsPage extends React.Component {

  constructor(props) {
    super(props);

    this.buyTickets = this.buyTickets.bind(this);
  }

  buyTickets(event, selectedSeats) {
    event.preventDefault();

    if (selectedSeats.length) {
      selectedSeats.forEach((seat) => {
        this.props.actions.markSeatSold(seat);
      })
    }
  }

  render() {
    return (
      <div className="tickets text-center">
        <div className="page-header">
          <h1>Buy Tickets <small>Select the seats you wish to purchase below.</small></h1>
        </div>
        <SeatingChart onSeatClick={this.props.actions.toggleSeatSelected} seatData={this.props.seats} width={1024} height={600} />
        <TicketForm selectedSeats={getSelectedSeats(this.props.seats)} buy={this.buyTickets} />
      </div>
    );
  }
}

BuyTicketsPage.propTypes = {
  seats: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    seats: state.seats
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(seatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketsPage);
