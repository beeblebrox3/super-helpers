const leadingZero = require('./leadingZero');

/**
 * Receive a number of seconds and return an string representing the amount of
 * hours on the format: 00h00m00s
 *
 * @param {Number} seconds
 * @param {Boolean} showSeconds
 * @return {string}
 * @memberof date
 *
 * @example
 * beautifySeconds(60, false) => 01m
 *
 * @example
 * beautifyMinutes(120, false) => 02m
 *
 * @example
 * beautifyMinutes(3900, false) => 1h05m
 *
 * @example
 * beautifyMinutes(3900, true) => 1h05m00s
 */
module.exports = function beautifySeconds (seconds, showSeconds = true) {
  let response = '';
  const theTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  theTime.hours = ~~(seconds / 3600);
  theTime.minutes = ~~((seconds % 3600) / 60);
  theTime.seconds = seconds % 60;

  if (theTime.hours) {
    response += `${theTime.hours}h`;
    response += `${leadingZero(theTime.minutes)}m`;
    response += showSeconds ? `${leadingZero(theTime.seconds)}s` : '';
  } else if (theTime.minutes) {
    response += `${leadingZero(theTime.minutes)}m`;
    response += showSeconds ? `${leadingZero(theTime.seconds)}s` : '';
  } else if (showSeconds) {
    response += `${leadingZero(theTime.seconds)}s`;
  }

  return response;
};
