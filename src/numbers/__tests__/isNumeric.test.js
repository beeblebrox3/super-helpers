jest.disableAutomock();
const isNumeric = require('../isNumeric');

describe('Test isNumeric function', () => {
  it('Should detect number as number', () => {
    [1, Infinity, -1, 0, 0.23, 3.23]
        .forEach(n => expect(isNumeric(n)).toBe(true));
  });

  it('Should detect numbers in strings as numbers', () => {
    ['1', '-1', '0', '-0.23', '3.23']
        .forEach((n => expect(isNumeric(n)).toBe(true)));
  });

  it('Should fail with non numeric values', () => {
    [null, undefined, '', 'x', 'ç', () => {
    }, {}, []]
        .forEach(n => expect(isNumeric(n)).toBe(false));
  });
});
