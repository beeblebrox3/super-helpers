jest.autoMockOff();

const sortByObjectKey = require("../sortByObjectKey");
const testCollection = [{a: 100}, {a: 1}, {a: 5}];

test("Test sortByObjectKey ASC", () => {
    const expected = [{a: 1}, {a: 5}, {a: 100}];
    const result = sortByObjectKey(testCollection, "a", "asc");
    expected.map((expected, index) => expect(result[index].a).toBe(expected.a));
    expect(result.length).toBe(expected.length);
});

test("Test sortByObjectKey DESC", () => {
    const expected = [{a: 100}, {a: 5}, {a: 1}];
    const result = sortByObjectKey(testCollection, "a", "desc");

    expected.map((expected, index) => expect(result[index].a).toBe(expected.a));
    expect(result.length).toBe(expected.length);
});

test("Test sortByObjectKey should be default ASC", () => {
    const expected = [{a: 1}, {a: 5}, {a: 100}];
    const result = sortByObjectKey(testCollection, "a");

    expected.map((expected, index) => expect(result[index].a).toBe(expected.a));
    expect(result.length).toBe(expected.length);
});
