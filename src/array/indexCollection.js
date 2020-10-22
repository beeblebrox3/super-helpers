/**
 * Takes an array of objects and transforms it into an object where the keys
 * are some value of each array
 *
 * @param {Object[]} data
 * @param {String} prop
 * @return {Object}
 * @memberof array
 * @name indexCollection
 *
 * @example
 * const data = [{id: 1, name: "foo"}, {id: 2, name: "abc"}]
 * indexCollection(data, "id")
 * // output will be {1: {id: 1, name: "foo"}, {id: 2, name: "abc"}}
 */
module.exports = function indexCollection (data, prop) {
  if (!Array.isArray(data)) throw new Error("data should be an array");
  if (typeof prop !== "string") throw new Error("prop should be a string");

  return data.reduce((response, item) => {
    response[item[prop]] = item;
    return response;
  }, {});
};
