const firstKey = require('../firstKey');

test('Should work with objects', () => {
  expect(firstKey({ a: 1, b: 2 })).toBe('a');
});

test('Should return null when object has no keys', () => {
  expect(firstKey({})).toBe(null);
});

test('Should throw error when input is not an object', () => {
  expect(() => firstKey(1)).toThrowError('obj must be an Object');
  expect(() => firstKey('a')).toThrowError('obj must be an Object');
  expect(() => firstKey(() => 1)).toThrowError('obj must be an Object');
  expect(() => firstKey([])).toThrowError('obj must be an Object');
});
