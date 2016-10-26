export function getSelectedSeats(seats) {
    const allSeats = [].concat.apply([], seats);

    return allSeats.filter((seat) => { return seat.selected });
}
