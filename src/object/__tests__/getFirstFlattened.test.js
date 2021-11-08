const getFirstFlattened = require("../getFirstFlattened");

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

test("Should work with match on first path", () => {
  expect(getFirstFlattened(["a.b", "a.c"], testObject)).toBe(1);
});

test("Should work with match on second path", () => {
  expect(getFirstFlattened(["a.c", "a.a.c"], testObject)).toBe(2);
});

test("Should return default value when path is not found", () => {
  expect(getFirstFlattened(["a.x", "b.x"], testObject, "default")).toBe("default");
});
