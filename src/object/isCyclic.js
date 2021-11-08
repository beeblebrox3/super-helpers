/**
 * Check if any given object has some kind of cyclic reference.
 *
 * @param {Object} obj the source to be checked
 * @return {boolean}
 * @memberof object
 *
 * @example
 * const obj { a: 1, b: 2 }
 * obj.c = obj;
 *
 * isCyclic(obj) // true
 */
function isCyclic (obj) {
  const seenObjects = [];

  const detect = obj => {
    if (obj && typeof obj === 'object') {
      if (seenObjects.includes(obj)) {
        return true;
      }

      seenObjects.push(obj);
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && detect(obj[key])) {
          return true;
        }
      }
    }

    return false;
  };

  return detect(obj);
}

module.exports = isCyclic;
