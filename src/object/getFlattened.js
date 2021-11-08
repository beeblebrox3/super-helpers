const { getRealArrayPosition, isArrayPosition } = require('./private');

/**
 * Get element from obj by string path
 * @param {string} path specify the key of the object you want
 * @param {Object} obj reference object
 * @param {any} defaultValue value to return if key was not found. Default is null
 * @return {any}
 * @memberof object
 *
 * @example
 * const a = {a: {b: 1}}
 * getFlattened("a.b", a) // 1
 *
 * @example with default value
 * const a = { a: { b: 1 } }
 * getFlattened('a.c', a, 2020) // 2020
 */
module.exports = function getFlattened (path, obj, defaultValue = null) {
  if (typeof path !== 'string') {
    throw Error('path must be string');
  }

  let i;
  let response = obj;
  const explodedPath = path.split('.');
  const size = explodedPath.length;

  for (i = 0; i < size; i++) {
    if (!(response instanceof Object)) {
      return defaultValue;
    }

    const realPath = isArrayPosition(explodedPath[i]) ? getRealArrayPosition(explodedPath[i]) : explodedPath[i];

    if (Object.prototype.hasOwnProperty.call(response, realPath)) {
      response = response[realPath];
    } else {
      return defaultValue;
    }
  }

  return response;
};
