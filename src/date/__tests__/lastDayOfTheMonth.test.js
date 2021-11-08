const MockDate = require("mockdate");
const lastDayOfTheMonth = require("../lastDayOfTheMonth");

MockDate.set("2021-11-08T00:00:00+00:00", 0);

test("Should work with current date as default", () => {
  expect(lastDayOfTheMonth()).toBe("2021-11-30");
});

test("Should work with custom date", () => {
  expect(lastDayOfTheMonth(2, 2016)).toBe("2016-02-29");
});
