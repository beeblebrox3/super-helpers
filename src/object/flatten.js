/**
 * Transforms an nested object into an flat object with dotted notation
 * Example: flatten({a: {b: 2}}) will return {"a.b": 2}
 *
 * @param {Object|Array} obj the source object or array
 * @param {string} [separator="."]
 * @param {string} [prefix=""] All keys will be prefixed with this arg
 * @return {Object}
 */
function flatten (obj, separator = ".", prefix = "") {
    let res = {};

    const isObject = (r) => Object.getPrototypeOf(r) === Object.prototype;

    Object.keys(obj).forEach(index => {
        const val = obj[index];
        const newIndex = prefix.length > 0 ? `${prefix}${separator}${index}` : index;

        if (isObject(val) || Array.isArray(val)) {
            const objF = flatten(val, separator, newIndex);
            res = Object.assign(res, objF);
            return;
        }

        res[newIndex] = val;
    });

    return res;
}

module.exports = flatten;
