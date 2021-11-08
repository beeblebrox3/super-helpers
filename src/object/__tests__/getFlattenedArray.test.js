jest.disableAutomock();

const getFlattenedArray = require("../getFlattenedArray");

test("Test getFlattenedArray with object and single array", () => {
  const input = {
    name: "Xpto",
    age: 77,
    address: {
      street: "first",
      number: 88,
    },
    phones: [
      { number: 1111111, code: 11 },
      { number: 2222222, code: 22 },
    ],
  };

  const expected = {
    name: "Xpto",
    address: { number: 88 },
    phones: [
      { code: 11 },
      { code: 22 },
    ],
  };

  expect(getFlattenedArray(["name", "address.number", "phones.*.code"], input)).toStrictEqual(expected);
});

test("Test getFlattenedArray with object and multiple arrays", () => {
  const input = {
    a: 1,
    b: [
      [
        { c: 2, d: 2 },
        { c: 3, d: 3 },
      ],
    ],
  };

  const expected = {
    a: 1,
    b: [
      [
        { c: 2 },
        { c: 3 },
      ],
    ],
  };

  expect(getFlattenedArray(["a", "b.*.*.c"], input)).toStrictEqual(expected);
});

test("Test getFlattenedArray with array at the end", () => {
  const input = {
    a: 1,
    b: [1, 2, 3],
  };

  const expected = {
    a: 1,
    b: [
      1, 2, 3,
    ],
  };

  expect(getFlattenedArray(["a", "b"], input)).toStrictEqual(expected);
});

