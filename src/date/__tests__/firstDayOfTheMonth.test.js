const MockDate = require("mockdate");
const firstDayOfTheMonth = require("../firstDayOfTheMonth");

MockDate.set("2021-11-08T00:00:00+00:00", 0);

test("Should work with current date as default", () => {
  expect(firstDayOfTheMonth()).toBe("2021-11-01");
});

test("Should work with custom date", () => {
  expect(firstDayOfTheMonth(new Date("1999-02-04"))).toBe("1999-02-01");
});
