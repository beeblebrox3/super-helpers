const leadingZero = require('./leadingZero');

/**
 * Returns the first day of the current month on the format: yyyy-dd-mm
 * @param {Date} [curdate]
 * @return {String}
 * @memberof date
 *
 * @example
 * // considering that today is 2016-01-22
 * firstDayOfTheMonth() // '2016-01-01'
 *
 * @example
 * firstDayOfTheMonth(new Date('2021-05-22')) // '2021-05-01'
 */
module.exports = function firstDayOfTheMonth (curdate = new Date()) {
  return `${curdate.getFullYear()}-${leadingZero(curdate.getMonth() + 1)}-01`;
};
