const getFlattened = require('./getFlattened');

/**
 * Receives a list of paths and use getFlattened to get the first existent value
 * @param {String[]} paths
 * @param {Object} obj
 * @param {any} [defaultValue]
 * @return {any}
 * @see getFlattened
 * @memberof object
 *
 * @example
 * const obj = {
 *   a: 1,
 *   b: {
 *     c: 2
 *   }
 * }
 *
 * getFirstFlattened(['a.c', 'a.b.c'], obj) // 2
 */
module.exports = function getFirstFlattened (paths, obj, defaultValue = null) {
  if (!Array.isArray(paths)) {
    throw new Error('paths must be an array of strings');
  }

  let res = defaultValue;
  paths.some(path => {
    const result = getFlattened(path, obj, defaultValue);
    if (result !== defaultValue) {
      res = result;
      return true;
    }
    return false;
  });

  return res;
};
