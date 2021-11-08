/**
 * Receives an duration with the format 00h00m00s and returns the amount
 * of seconds. The inverse of beautifySeconds
 *
 * @param {String} theTime
 * @return {Number}
 * @memberof date
 *
 * @example
 * fromBeutyToSeconds('1h39m5s') // 5945
 */
module.exports = function fromBeutyToSeconds (theTime) {
  let response = 0;

  const hours = /(\d+)h/.exec(theTime);
  const minutes = /(\d{1,2})m/.exec(theTime);
  const seconds = /(\d{1,2})s/.exec(theTime);

  if (hours) {
    response += parseInt(hours[1], 10) * 3600;
  }

  if (minutes) {
    response += parseInt(minutes[1], 10) * 60;
  }

  if (seconds) {
    response += parseInt(seconds[1], 10);
  }

  if (!response) {
    response += parseInt(theTime, 10);
  }

  return response;
};
