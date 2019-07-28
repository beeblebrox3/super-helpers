/**
 * Sort a collection of objects by one of the keys
 *
 * @param {Object[]} data
 * @param {String} prop
 * @param {String} direction defines if sort should be asc or desc
 * @return {Object[]} sorted arrray
 * @memberof array
 * @name sortByObjectKey
 *
 * @example
 * const data = [{id: 1, name: "foo"}, {id: 2, name: "abc"}]
 * sortByObjectKey(data, "name")
 * // output will be [{id: 2, name: "abc"}, {id: 1, name: "foo"}]
 */
module.exports = function sortByObjectKey(data, prop, direction = "asc") {
  if (["asc", "desc"].indexOf(direction) === -1) {
    throw new Error("Direction should be asc or desc");
  }

  return data.sort((a, b) => {
    let response = 0;
    const ap = a[prop];
    const bp = b[prop];

    if (ap < bp) {
      response = direction === "asc" ? -1 : 1;
    } else if (ap > bp) {
      response = direction === "asc" ? 1 : -1;
    }

    return response;
  });
};
