/**
 * Receive two dates and returns the amount of days between them
 * Dates on the format supported by the Date constructor
 *
 * @param {String} startDateString
 * @param {String} endDateString
 * @return {Number}
 * @memberof date
 *
 * @example
 * daysBetween('2016-01-01', '2016-01-03') // 2
 *
 */
module.exports = function daysBetween (startDateString, endDateString) {
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  return Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));
};
