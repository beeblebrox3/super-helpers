module.exports = {
    /**
     * Sort an array of objects by one prop of objects
     * @param {Array} data
     * @param {String} prop
     * @param {String} direction defines if sort should be asc or desc
     * @return {Array} sorted arrray
     */
    sortByObjectKey: function (data, prop, direction = "asc") {
        if (["asc", "desc"].indexOf(direction) === -1) {
            throw new Error("Direction should be asc or desc");
        }

        return data.sort((a, b) => {
            let response = 0;
            let ap = a[prop];
            let bp = b[prop];

            if (ap < bp) {
                response = direction === "asc" ? -1 : 1;
            } else if (ap > bp) {
                response = direction === "asc" ? 1 : -1;
            }

            return response;
        });
    },

    /**
     * Filter objects from array that has key value in values
     * Example:
     * var arr = [{a: 1}, {a: 2}, {a: 3}]
     * App.helpers.array.filterBy("a", [1, 3], arr);
     *
     * The output will be:
     * [{a: 1}, {a: 3}]
     * @param {String} key
     * @param {*} values
     * @param {Array} items
     * @return {Array}
     */
    filterBy: function (key, values, items) {
        return items.filter(item => values.indexOf(item[key]) > -1);
    },
};
