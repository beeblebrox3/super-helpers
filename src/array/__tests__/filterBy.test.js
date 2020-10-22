jest.autoMockOff();

const filterBy = require("../filterBy");
const testCollection = [{a: 100}, {a: 1}, {a: 5}];

test("Test filter by", () => {
  const expected = [{a: 100}, {a: 5}];
  const result = filterBy("a", [5, 100], testCollection);

  expected.map((expected, index) => expect(result[index].a).toBe(expected.a));
  expect(result.length).toBe(expected.length);
});
