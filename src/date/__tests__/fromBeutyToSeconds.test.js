const fromBeautyToSeconds = require("../fromBeutyToSeconds");

test("Should work with seconds", () => {
  expect(fromBeautyToSeconds("1s")).toBe(1);
  expect(fromBeautyToSeconds("01s")).toBe(1);
});

test("Should work with minutes", () => {
  expect(fromBeautyToSeconds("1m04s")).toBe(64);
  expect(fromBeautyToSeconds("10m04s")).toBe(604);
});

test("Should work with hours", () => {
  expect(fromBeautyToSeconds("1h39m05s")).toBe(5945);
});
