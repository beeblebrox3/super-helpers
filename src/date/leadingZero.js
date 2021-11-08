/**
 * @param {String|Number} num add a leading 0 to help format dates and times
 * @return {String}
 * @memberof date
 * @private
 *
 * @example
 * leadingZero(1) // '01'
 * leadingZero(10) // '10'
 */
module.exports = function leadingZero (num) {
  return `0${num}`.slice(-2);
};
