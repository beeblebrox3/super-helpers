/** @namespace object */
module.exports = {
    /**
     * Get element from obj by string path
     * Example:
     * Given the object let a = {a: {b: 1}}
     * When you do getFlattened("a.b", a)
     * Then you get the number 1.
     * @param {string} path specify the key of the object you want
     * @param {Object} obj reference object
     * @param {any} defaultValue value to return if key was not found. Default is null
     * @return {any}
     * @memberof object
     */
    getFlattened: function (path, obj, defaultValue = null) {
        if (typeof path !== "string") {
            throw Error("path must be string");
        }

        let i;
        let response = obj;
        const explodedPath = path.split(".");
        const size = explodedPath.length;

        for (i = 0; i < size; i++) {
            if (response instanceof Object === false) {
                return defaultValue;
            }

            if (response.hasOwnProperty(explodedPath[i])) {
                response = response[explodedPath[i]];
            } else {
                return defaultValue;
            }
        }

        return response;
    },

    /**
     * Receives a list of paths and use getFlattened to get the first existent value
     * @param {String[]} paths
     * @param {Object} obj
     * @param {any} defaultValue
     * @return {any}
     * @see getFlattened
     */
    getFirstFlattened: function (paths, obj, defaultValue = null) {
        if (!Array.isArray(paths)) {
            throw new Error("paths must be an array of strings");
        }

        let res = defaultValue;
        paths.some(path => {
            const result = this.getFlattened(path, obj, defaultValue);
            if (result !== defaultValue) {
                res = result;
                return true;
            }
            return false;
        });

        return res;
    },

    /**
     * @see getFlattened
     * Similar to getFlattened, but it set the value instead of return it.
     * Example:
     * Given the object let b = {a: {b: 1}}
     * When you do setFlattened("a.b", 2)
     * Then you get {a: {b: 2}}
     * @param {String} path
     * @param {*} newValue
     * @param {Object} obj
     * @return {*}
     * @memberof object
     */
    setFlattened: function (path, newValue, obj) {
        "use strict";

        const explodedPath = path.split(".");
        const laps = explodedPath.length - 1;
        let i;
        let temp = obj;

        for (i = 0; i < laps; i += 1) {
            temp = temp[explodedPath[i]];
        }

        temp[explodedPath[laps]] = newValue;
        return obj;
    },

    /**
     * Get first key of an object or null if it doesn't have keys
     * @param {Object} obj
     * @return {*}
     * @memberof object
     */
    firstKey: function (obj) {
        "use strict";

        if (Object.getPrototypeOf(obj) !== Object.prototype) {
            throw Error("obj must be an Object");
        }

        return Object.keys(obj)[0] || null;
    },

    collectionContains: require("./collectionContains"),

    flatten: require("./flatten"),

    isCyclic: require("./isCyclic"),
};
