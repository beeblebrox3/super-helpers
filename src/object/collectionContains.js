/**
 * Checks if an array of objetcs contain another object (even partially)
 * @todo don't support nested objects for now
 *
 * @param {Object[]} collection
 * @param {Object} userFilters object to find
 * @param {Boolean} [detailed] if true will return an object with deails about the searc
 * @param {Boolean} [ignoreCase] if true, will ignore case when matching strings
 * @return {Boolean|Object}
 * @memberof object
 */
function collectionContains (collection, userFilters, detailed = false, ignoreCase = false) {
  const filters = Object.assign({}, userFilters);
  const details = [];
  const found = collection.some((obj) => {
    const diff = {};

    let expectedValue;
    let realValue;

    Object.keys(filters).forEach(filter => {
      expectedValue = filters[filter];
      realValue = obj[filter];

      if (ignoreCase === true) {
        if (typeof expectedValue === "string" || expectedValue instanceof String) {
          expectedValue = expectedValue.toLowerCase();
        }

        if (typeof realValue === "string" || realValue instanceof String) {
          realValue = realValue.toLowerCase();
        }
      }

      if (typeof filters[filter] === "function") {
        if (!filters[filter](realValue)) {
          diff[filter] = {
            expected: "custom validation", // @todo
            real: realValue,
          };
        }
      } else if (!Object.prototype.hasOwnProperty.call(obj, filter) || expectedValue != realValue) {
        diff[filter] = {
          expected: expectedValue,
          real: realValue,
        };
      }
    });

    details.push(diff);
    return Object.keys(diff).length === 0;
  });

  if (!detailed) {
    return found;
  }

  return {
    found,
    details: details,
  };
}

collectionContains.Types = {
  NotEmpty: function (v) {
    return !!v;
  },
};

module.exports = collectionContains;
