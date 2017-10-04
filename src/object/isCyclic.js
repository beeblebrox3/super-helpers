/**
 * Check if any given object has some kind of cyclic reference.
 *
 * @param {Object} obj the source to be checked
 *
 * @return {boolean}
 */
const isCyclic = obj => {
    let seenObjects = [];

    const detect = obj => {
        if (obj && typeof obj === "object") {
            if (seenObjects.includes(obj)) {
                return true;
            }

            seenObjects.push(obj);
            for (const key in obj) {
                if (obj.hasOwnProperty(key) && detect(obj[key])) {
                    return true;
                }
            }
        }

        return false;
    };

    return detect(obj);
};

module.exports = isCyclic;
