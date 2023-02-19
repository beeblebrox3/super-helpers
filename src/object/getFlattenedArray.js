const getFlattened = require('./getFlattened');
const setFlattened = require('./setFlattened');
const { UNIVERSAL_UNDEFINED_VALUE_INDICATOR } = require('./private');

/**
 * @param {string[]} paths
 * @param {object} obj
 * @return {string[]|null}
 * @ignore
 */
function handleSpread (paths, obj) {
  const firstPathSplitted = paths[0].split('.');
  const spreadPosition = firstPathSplitted.indexOf('*');
  if (spreadPosition === -1) {
    return null;
  }

  const path = firstPathSplitted.slice(0, spreadPosition).join('.');
  const arraySize = getFlattened(path, obj, []).length;

  const resp = [];
  paths.forEach(localPath => {
    for (let i = 0; i < arraySize; i++) {
      resp.push(localPath.replace('*', `[${i}]`));
    }
  });

  return resp;
}

/**
 * validate if paths are valid
 * @param {any} paths
 */
function validatePaths (paths) {
  if (!Array.isArray(paths)) {
    throw Error('paths must be array');
  }

  if (paths.some(path => typeof path !== 'string')) {
    throw Error('paths must be array of strings');
  }
}

/**
 * Extracts a fragment of an object, including nested properties and array support.
 * Note: it doen´t work when the keys have '.'.
 *
 * @param {string[]} paths to extract a value from every object in a collection use '*'. eg: ['a.*.name']
 * @param {object} obj
 * @return {object}
 * @memberof object
 *
 * @example
 * const input = {
 *   name: "Xpto",
 *   age: 77,
 *   address: {
 *     street: "first",
 *     number: 88,
 *   },
 *   phones: [
 *     { number: 1111111, code: 11 },
 *     { number: 2222222, code: 22 },
 *   ],
 * };
 *
 * const res = getFlattenedArray(["name", "address.number", "phones.*.code"], input)
 *
 * // result
 * {
 *   name: "Xpto",
 *   address: { number: 88 },
 *   phones: [
 *     { code: 11 },
 *     { code: 22 },
 *   ],
 * };
 */
module.exports = function getFlattenedArray (paths, obj) {
  validatePaths(paths);

  let response = {};
  paths.forEach(path => {
    let pathsToGet = [];

    if (path.indexOf('*') > -1) {
      let resp;
      let tempPaths = [path];
      do {
        resp = handleSpread(tempPaths, obj);
        if (resp !== null) {
          tempPaths = resp;
        }
      } while (resp !== null && resp.length > 0);
      pathsToGet = tempPaths;

      // contains array
    } else {
      pathsToGet.push(path);
    }

    pathsToGet.forEach(currentPath => {
      const value = getFlattened(currentPath, obj, UNIVERSAL_UNDEFINED_VALUE_INDICATOR);
      if (value !== UNIVERSAL_UNDEFINED_VALUE_INDICATOR) {
        response = setFlattened(currentPath, value, response);
      }
    });
  });

  return response;
};
