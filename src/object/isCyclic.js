const isObject = obj => typeof obj === "object";

/**
 * Check if any given object has some kind of cyclic reference.
 *
 * @param {Object} obj the source to be checked
 * @return {boolean}
 * @memberof object
 */
function isCyclic(obj) {
    const seenObjects = [];
    const isSeen = obj => isObject(obj) && seenObjects.includes(obj);

    const detect = obj => {
        if (isSeen(obj)) {
            return true;
        }

        seenObjects.push(obj);

        for (const key in Object.keys(obj)) {
            if (detect(obj[key])) {
                return true;
            }
        }

        return false;
    };

    return detect(obj);
}

module.exports = isCyclic;
