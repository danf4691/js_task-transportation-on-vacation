/**
 * @param {number} days
 *
 *
 * @return {number}
 */
const SMALL_TERM = 2;
const LONG_TERM = 6;
const DAILY_RATE = 40;

function calculateRentalCost(days) {
  if (days <= SMALL_TERM) {
    return days * DAILY_RATE;
  }

  if (days <= LONG_TERM) {
    return days * DAILY_RATE - 20;
  }

  if (days > LONG_TERM) {
    return days * DAILY_RATE - 50;
  }
}

module.exports = calculateRentalCost;
