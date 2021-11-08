const MockDate = require('mockdate');
const curdate = require('../curdate');

MockDate.set('2016-01-01T00:00:00+00:00', 0);

test('Test curdate', () => {
  expect(curdate()).toBe('2016-01-01');
});
