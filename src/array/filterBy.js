/**
 * Filter a collection of objects by one prop
 *
 * @param {String} key
 * @param {*} values
 * @param {Object[]} items
 * @return {Object[]}
 * @memberof array
 * @name filterBy
 *
 * @example
 * const arr = [{a: 1}, {a: 2}, {a: 3}]
 * filterBy("a", [1, 3], arr);
 *
 * // The output will be:
 * // [{a: 1}, {a: 3}]
 */
module.exports = function filterBy (key, values, items) {
    return items.filter(item => values.indexOf(item[key]) > -1);
};
