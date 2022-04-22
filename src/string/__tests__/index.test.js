jest.autoMockOff();

const StringHelper = require('../index');

const equals = (actual, expected) => expect(actual).toBe(expected);
test('Test resolveUrl', () => {
  const basepath = 'http://x.com/';

  const hash = {
    'http://google.com': 'http://google.com',
    'https://google.com': 'https://google.com',
    '//google.com': '//google.com',
  };

  Object.keys(hash).forEach((url) => {
    equals(StringHelper.resolveUrl(url), hash[url]);
  });

  equals(StringHelper.resolveUrl('http://google.com', basepath), 'http://google.com');
  equals(StringHelper.resolveUrl('foo/bar', basepath), `${basepath}foo/bar`);
});

test('Test ucfirst', () => {
  const hash = {
    'oba': 'Oba',
    'oba oba': 'Oba oba',
    '': '',
    '1': '1',
  };

  Object.keys(hash).forEach((word) => {
    equals(StringHelper.ucfirst(word), hash[word]);
    equals(StringHelper.capitalize(word), hash[word]);
  });
});

test('Test ucwords', () => {
  const hash = {
    'oba': 'Oba',
    'oba oba': 'Oba Oba',
    '': '',
    '1': '1',
  };

  Object.keys(hash).forEach((word) => {
    equals(StringHelper.ucwords(word), hash[word]);
  });
});

test('Test excerpt', () => {
  const hash = {
    'This is a phrase': {
      3: 'This...',
      4: 'This...',
      5: 'This...',
      7: 'This is a...',
    },
  };

  Object.keys(hash).forEach(phrase => {
    Object.keys(hash[phrase]).forEach(maxLength => {
      equals(StringHelper.excerpt(phrase, maxLength), hash[phrase][maxLength]);
    });
  });
});
