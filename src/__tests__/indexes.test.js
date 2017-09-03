jest.autoMockOff();

const lib = require("../index");
const getFlattened = require("../object/index").getFlattened;

test("test if indexes files", () => {
    [
        "array.sortByObjectKey",
        "array.filterBy",
        "date.leadingZero",
        "date.beautifySeconds",
        "date.beautifyMinutes",
        "date.fromBeutyToSeconds",
        "date.daysBetween",
        "date.curdate",
        "date.firstDayOfTheMonth",
        "date.lastDayOfTheMonth",
        "object.getFlattened",
        "object.setFlattened",
        "object.firstKey",
        "object.collectionContains",
        "object.flatten",
        "string.resolveUrl",
        "string.ucfirst",
        "string.capitalize",
        "string.ucwords",
        "string.excerpt",
        "string.uuid",
    ].forEach(key => {
        try {
            expect(typeof getFlattened(key, lib)).toBe("function");
        } catch(e) {
            console.log(`error on ${key}`);
            throw e;
        }
    });
});
