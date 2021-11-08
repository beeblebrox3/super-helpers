jest.autoMockOff();

const indexCollection = require('../indexCollection');
const testCollection = [{ a: 100 }, { a: 1 }, { a: 5 }];

test('Test indexCollection', () => {
  const expected = {
    100: { a: 100 },
    1: { a: 1 },
    5: { a: 5 },
  };

  const result = indexCollection(testCollection, 'a');
  expect(result).toMatchObject(expected);
});


test('Test indexCollection should not work with invalid arguments', () => {
  expect(() => indexCollection('a', 'a')).toThrowError('data should be an array');
  expect(() => indexCollection([], 1)).toThrowError('prop should be a string');
});
