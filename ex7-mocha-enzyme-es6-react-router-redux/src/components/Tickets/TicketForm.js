import React from 'react';

export default class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.buy(event, this.props.selectedSeats);
  }

  render() {
    const totalPrice = this.props.selectedSeats
      .map((seat) => { return seat.price })
      .reduce((sum, price) => { return sum + price }, 0);

    let rowHeader;
    const seatList = this.props.selectedSeats
      .map((seat, index) => {
        rowHeader = (index === 0) ? 'Seats Chosen' : '';

        return (
          <tr key={seat.seatNumber}>
            <th>{rowHeader}</th>
            <td>{seat.seatNumber}</td>
            <td>$ {seat.price}</td>
          </tr>
        );
      });

    return (
      <form className="ticket-form" onSubmit={this.handleSubmit}>
        <table className="table ticket-form__table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Seat</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {seatList}
          </tbody>
          <tfoot className="ticket-form__footer">
            <tr>
              <th>Total Price</th>
              <td className="ticket-form__total-seats">{seatList.length}</td>
              <td className="ticket-form__total-price">$ {totalPrice}</td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-primary" type="submit" disabled={!(seatList.length)}>Complete Purchase</button>
      </form>
    );
  }
}

TicketForm.propTypes = {
  selectedSeats: React.PropTypes.array.isRequired,
  buy: React.PropTypes.func
};
