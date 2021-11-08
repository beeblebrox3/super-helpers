const getFlattened = require("../getFlattened");

const testObject = {
  a: {
    a: {
      b: 1,
      c: 2,
      d: null,
    },
    b: 1,
  },
};

test("Should work with existing prop", () => {
  expect(getFlattened("a.b", testObject)).toBe(1);
});

test("Should work with nested object", () => {
  expect(getFlattened("a.a.c", testObject)).toBe(2);
});

test("Should return default value when path is not found", () => {
  expect(getFlattened("a.b.c.d.e", testObject, 999)).toBe(999);
});

