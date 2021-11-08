const isNumeric = require("./isNumeric");

/**
 * Checks if value is an integer
 *
 * @param {*} value
 * @return {boolean}
 * @memberof numbers
 * @name isInteger
 *
 * @example
 * isInteger('abc'); // false
 *
 * @example
 * isInteger('123.2'); // false
 *
 * @example
 * isInteger(123.3); // false
 *
 * @example
 * isInteger(123); // true
 *
 * @example
 * isInteger('123'); // true
 */
module.exports = value => {
  if (!isNumeric(value)) return false;
  return (value | 0) == value;
};
