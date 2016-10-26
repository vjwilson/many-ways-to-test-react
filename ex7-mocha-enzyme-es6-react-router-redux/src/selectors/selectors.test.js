import { expect } from 'chai';
import { getSelectedSeats } from './selectors';
import mockSeatData from '../../test/fixtures/mockSeatData';

describe('Seat Selectors', () => {
  let mockSeats;

  beforeEach(function() {
    mockSeats = JSON.parse(JSON.stringify(mockSeatData));
  });

  describe('getSelectedSeats', () => {
    it('should return an empty array when no seats are selected', () => {
      const selectedSeats = getSelectedSeats(mockSeats);

      expect(selectedSeats).to.have.lengthOf(0);
    });

    it('should return an array of seats marked selected', () => {
      mockSeats[1][8].selected = true;
      mockSeats[1][9].selected = true;

      const selectedSeats = getSelectedSeats(mockSeats);

      expect(selectedSeats).to.have.lengthOf(2);
      expect(selectedSeats[0].seatNumber).to.equal('B9');
      expect(selectedSeats[1].seatNumber).to.equal('B10');
    });
  });
});
