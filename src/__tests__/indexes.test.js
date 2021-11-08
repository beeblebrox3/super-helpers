jest.autoMockOff();

const lib = require("../index");
const getFlattened = require("../object/index").getFlattened;

test("test if indexes files", () => {
  [
    "array.sortByObjectKey",
    "array.filterBy",
    "array.indexCollection",
    "date.leadingZero",
    "date.beautifySeconds",
    "date.beautifyMinutes",
    "date.fromBeutyToSeconds",
    "date.daysBetween",
    "date.curdate",
    "date.firstDayOfTheMonth",
    "date.lastDayOfTheMonth",
    "object.getFlattened",
    "object.getFlattenedArray",
    "object.setFlattened",
    "object.firstKey",
    "object.collectionContains",
    "object.flatten",
    "object.getFlattenedArray",
    "string.resolveUrl",
    "string.ucfirst",
    "string.capitalize",
    "string.ucwords",
    "string.excerpt",
  ].forEach(key => {
    try {
      expect(typeof getFlattened(key, lib)).toBe("function");
    } catch (e) {
      console.log(`error on ${key}`);
      throw e;
    }
  });
});
