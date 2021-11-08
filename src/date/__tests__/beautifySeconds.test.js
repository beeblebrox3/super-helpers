const beautifySeconds = require('../beautifySeconds');


test('Should return empty when not showing seconds and input is less than 60s', () => {
  expect(beautifySeconds(59, false)).toBe('');
});

test('Should return only seconds when showing seconds and input is less than 60s', () => {
  expect(beautifySeconds(59, true)).toBe('59s');
});

test('Shoud return only minutes when input are less than 3600s', () => {
  expect(beautifySeconds(61, false)).toBe('01m');
});

test('Should minutes with seconds when input are less than 3600s', () => {
  expect(beautifySeconds(61, true)).toBe('01m01s');
});

test('Should return hours with minutes when input are greater than or equal to 3600s', () => {
  expect(beautifySeconds(3605, false)).toBe('1h00m');
  expect(beautifySeconds(3905, false)).toBe('1h05m');
});

test('Should return hours with minutes and seconds when input are greater than or equal to 3600s', () => {
  expect(beautifySeconds(3605, true)).toBe('1h00m05s');
  expect(beautifySeconds(3905, true)).toBe('1h05m05s');
});
