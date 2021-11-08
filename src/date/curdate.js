/**
 * Returns the current date on the format: yyyy-mm-dd
 * @return {String}
 * @memberof date
 *
 * @example
 * curdate() // '2016-01-01'
 */
module.exports = function curdate () {
  return new Date().toISOString().substr(0, 10);
};
