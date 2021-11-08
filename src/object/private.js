/**
 * @param {string} val
 * @return {boolean}
 * @internal
 * @ignore
 */
exports.isArrayPosition = function isArrayPosition (val) {
  return /\[\d+\]/.test(val);
};

/**
 *
 * @param {string} val
 * @return {string}
 * @internal
 * @ignore
 */
exports.getRealArrayPosition = function getRealArrayPosition (val) {
  return val.substring(1, val.length - 1);
};
