const setFlattened = require('../setFlattened');

test('Should work with nested objects', () => {
  const path = 'a.b.c.d.e';
  const value = 222;
  const expected = {
    a: {
      b: {
        c: {
          d: {
            e: value,
          },
        },
      },
    },
  };

  expect(setFlattened(path, value, {})).toStrictEqual(expected);
});

test('Should create arrays', () => {
  const path = 'a.[0].b.[0].d';
  const value = 222;
  const expected = {
    a: [
      { b: [{ d: 222 }] },
    ],
  };

  expect(setFlattened(path, value, {})).toStrictEqual(expected);
});

test('Should create top level array', () => {
  const path = '[0].b';
  const value = 222;
  const expected = [{ b: 222 }];

  expect(setFlattened(path, value, [])).toStrictEqual(expected);
});

test('Should create array with empty positions', () => {
  const path = 'a.[22].c';
  const value = 222;
  const expected = {
    a: [],
  };
  expected.a[22] = { c: value };

  expect(setFlattened(path, value, {})).toStrictEqual(expected);
});

test('Should create array at the last level', () => {
  const path = 'a.[0]';
  const value = 222;
  const expected = {
    a: [value],
  };

  expect(setFlattened(path, value, {})).toStrictEqual(expected);
});
