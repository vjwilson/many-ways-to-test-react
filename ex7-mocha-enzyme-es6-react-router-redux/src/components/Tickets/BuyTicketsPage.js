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

    this.state = {
      ticketPackage: {
        seats: []
      }
    };

    this.buyTickets = this.buyTickets.bind(this);
  }

  buyTickets(event) {
    event.preventDefault();

    if (this.state.ticketPackage.seats.length) {
      for (let i = 0, len = this.state.seatData.length; i < len; i++) {
        this.state.seatData[i].forEach((seat) => {
          if (seat.selected) {
            seat.selected = false;
            seat.sold = true;
          }
        });
      }

      this.setState({
        seatData: this.state.seatData,
        ticketPackage: {
          seats: []
        }
      });

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
