const leadingZero = require("./leadingZero");

/**
 * Returns the last day of the month on the format: yyyy-mm-dd
 * It accepts an optional month and year to get the last day of an particular month
 * @param {String|number} month
 * @param {String|number} year
 * @return {String}
 * @memberof date
 *
 * @example
 * // considering that today is 2021-11-08
 * lastDayOfTheMonth() // '2021-11-30'
 * lastDayOfTheMonth(12) // '2021-12-31'
 */
module.exports = function lastDayOfTheMonth (month, year) {
  const today = new Date();
  const useMonth = month ? month : today.getMonth() + 1;
  const useYear = year ? year : today.getFullYear();
  const lastDay = new Date(+useYear, +useMonth, 0);

  return `${useYear}-${leadingZero(useMonth)}-${leadingZero(lastDay.getDate())}`;
};
