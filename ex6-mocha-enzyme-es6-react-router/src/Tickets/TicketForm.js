import React from 'react';

export default class TicketForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.buy(event);
  }

  render() {
    let totalPrice = 0;
    let rowHeader;
    const seatList = this.props.package.seats.sort().map((seat) => {
      rowHeader = (totalPrice === 0) ? 'Seats Chosen' : '';
      totalPrice += seat.price;

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
              <td className="ticket-form__total-seats">{this.props.package.seats.length}</td>
              <td className="ticket-form__total-price">$ {totalPrice}</td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-primary" type="submit" disabled={!(this.props.package.seats.length)}>Complete Purchase</button>
      </form>
    );
  }
}
