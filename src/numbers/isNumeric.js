/**
 * Checks if value is numeric
 *
 * @param {*} value
 * @return {boolean}
 * @memberof numbers
 * @name isNumeric
 *
 * @example
 * isNumeric('abc'); // false
 *
 * @example
 * isNumeric('123'); // true
 *
 * @example
 * isNumeric(123); // true
 */
module.exports = value => {
  if (typeof value === 'number') return true;
  return typeof value === 'string' && value == +value && value !== '';
};
