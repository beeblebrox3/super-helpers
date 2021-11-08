const { isArrayPosition, getRealArrayPosition } = require('./private');

/**
 * @see getFlattened
 * Similar to getFlattened, but it set the value instead of return it.
 *
 * [version 2.0+] To create an array the path fragment must be wrapped on brackets (eg: path.[0].other)
 * Note: for array on the top level, obj must be an array
 *
 * @param {String} path
 * @param {*} newValue
 * @param {Object|Array} [obj]
 * @return {*}
 * @memberof object
 *
 * @example
 * setFlattened("a.b", 2, {}) // { a: { b: 2 } }
 *
 * @example
 * setFlattened("a.[0].c", 2, {}) // { a: [{ c: 2 } ]}
 */
module.exports = function setFlattened (path, newValue, obj) {
  const explodedPath = path.split('.');
  const laps = explodedPath.length - 1;
  let i;
  let temp = obj;

  for (i = 0; i < laps; i += 1) {
    const currentPath = explodedPath[i];
    const realPath = isArrayPosition(currentPath) ? getRealArrayPosition(currentPath) : currentPath;

    if (temp[realPath] === undefined) {
      if (isArrayPosition(explodedPath[i + 1])) {
        temp[realPath] = [];
      } else {
        temp[realPath] = {};
      }
    }

    temp = temp[realPath];
  }

  const lastPath = isArrayPosition(explodedPath[laps]) ?
    getRealArrayPosition(explodedPath[laps]) :
    explodedPath[laps];

  temp[lastPath] = newValue;
  return obj;
};
