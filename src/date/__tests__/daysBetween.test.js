const daysBetween = require('../daysBetween');

test('Should return 0 with same dates', () => {
  expect(daysBetween('2016-01-01', '2016-01-01')).toBe(0);
});

test('Should return 1 with consecutive dates', () => {
  expect(daysBetween('2016-01-01', '2016-01-02')).toBe(1);
});

test('Should return 366 with 366 days of difference', () => {
  expect(daysBetween('2016-01-01', '2017-01-01')).toBe(366);
});
