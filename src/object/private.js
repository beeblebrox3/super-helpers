/**
 * @param {string} val
 * @return {boolean}
 * @internal
 * @ignore
 */
exports.isArrayPosition = function isArrayPosition (val) {
  return /[\d+]/.test(val);
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

exports.UNIVERSAL_UNDEFINED_VALUE_INDICATOR = '@beeblebrox3/super-helpers:undefined_valud_indicator';
