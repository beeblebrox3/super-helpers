/**
 * @param {string} val
 * @return {boolean}
 * @internal
 */
exports.isArrayPosition = function isArrayPosition (val) {
  return /\[\d+\]/.test(val);
};

/**
 *
 * @param {string} val
 * @return {string}
 * @internal
 */
exports.getRealArrayPosition = function getRealArrayPosition (val) {
  return val.substring(1, val.length - 1);
};
