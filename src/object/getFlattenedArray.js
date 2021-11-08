const { getFlattened, setFlattened } = require("./index");

/**
 * @param {string[]} paths
 * @param {object} obj
 * @return {string[]}
 * @internal
 */
function handleSpread (paths, obj) {
  const firstPathSplitted = paths[0].split(".");
  const spreadPosition = firstPathSplitted.indexOf("*");
  if (spreadPosition === -1) return null;

  const path = firstPathSplitted.slice(0, spreadPosition).join(".");
  const arraySize = getFlattened(path, obj, []).length;

  const resp = [];
  paths.forEach(path => {
    for (let i = 0; i < arraySize; i++) {
      resp.push(path.replace("*", `[${i}]`));
    }
  });

  return resp;
}

/**
 * Extracts a fragment of an object, including nested properties and array support.
 * Note: it doen´t work when the keys have '.'.
 *
 * @param {string[]} paths to extract a value from every object in a collection use '[*]'. eg: ['a.[*].name']
 * @param {object} obj
 * @return {object}
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
  if (!Array.isArray(paths)) {
    throw Error("paths must be array");
  }

  if (paths.some(path => typeof path !== "string")) {
    throw Error("paths must be an array of strings");
  }

  let response = {};
  paths.forEach(path => {
    let pathsToGet = [];

    if (path.indexOf("*") > -1) {
      let resp = null;
      let tempPaths = [path];
      do {
        resp = handleSpread(tempPaths, obj);
        if (resp !== null) {
          tempPaths = resp;
        }
      } while (resp !== null);
      pathsToGet = tempPaths;

      // contains array
    } else {
      pathsToGet.push(path);
    }

    pathsToGet.forEach(currentPath => {
      response = setFlattened(currentPath, getFlattened(currentPath, obj), response);
    });
  });

  return response;
};
