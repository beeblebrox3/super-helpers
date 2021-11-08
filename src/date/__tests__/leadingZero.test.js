const leadingZero = require("../leadingZero");

test("It should work with integer", () => {
  expect(leadingZero(0)).toBe("00");
});

test("It should work with string with single digit", () => {
  expect(leadingZero("1")).toBe("01");
});

test("It should work with string with two digits", () => {
  expect(leadingZero("10")).toBe("10");
});

test("It should strip extra caracteres", () => {
  expect(leadingZero("111")).toBe("11");
});

