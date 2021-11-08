const beautifySeconds = require('./beautifySeconds');

/**
 * @see beautifySeconds
 * Works the same way as beautifySeconds, but receive an amount of minutes
 * @param {Number} minutes
 * @param {Boolean} showSeconds
 * @return {String}
 * @memberof date
 *
 * @example
 * beautifyMinutes(66) // '1h06m'
 */
module.exports = function beautifyMinutes (minutes, showSeconds = true) {
  return beautifySeconds(minutes * 60, showSeconds);
};
