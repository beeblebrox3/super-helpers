jest.disableAutomock();
const isInteger = require("../isInteger");

describe("Test isInteger function", () => {
  it("Should succed with integers", () => {
    [1, 0, -1].forEach(n => expect(isInteger(n)).toBe(true));
  });

  it("Should succed with numbers in strings", () => {
    ["1", "-1", "0"]
        .forEach((n => expect(isInteger(n)).toBe(true)));
  });

  it("Should fail with non numerics", () => {
    [null, undefined, "", "x", "ç", () => {
    }, {}, []]
        .forEach(n => expect(isInteger(n)).toBe(false));
  });

  it("Should fail with floats", () => {
    [0.1, 3.23].forEach(n => expect(isInteger(n)).toBe(false));
  });
});
