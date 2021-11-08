/**
 * Get first key of an object or null if it doesn't have keys
 * @param {Object} obj
 * @return {*}
 * @memberof object
 *
 * @example
 * firstKey({ a: 2, b: 2 }) // 'a'
 */
module.exports = function firstKey (obj) {
  if (Object.getPrototypeOf(obj) !== Object.prototype) {
    throw Error('obj must be an Object');
  }

  return Object.keys(obj)[0] || null;
};
