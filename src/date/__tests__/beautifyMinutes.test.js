const beautifyMinutes = require("../beautifyMinutes");

test("Should return minutes", () => {
  expect(beautifyMinutes(59, false)).toBe('59m');
});

test("Should return minutes and seconds", () => {
  expect(beautifyMinutes(59, true)).toBe('59m00s');
});

test("Should return hours and minutes", () => {
  expect(beautifyMinutes(61, false)).toBe('1h01m');
});

test("Should return hours, minutes and seconds", () => {
  expect(beautifyMinutes(61, true)).toBe('1h01m00s');
});
