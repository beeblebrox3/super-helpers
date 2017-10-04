jest.autoMockOff();

const isCyclic = require("../isCyclic");

test("test isCyclic function", () => {
    let a = {};
    let b = {};
    let c = {};
    a.b = b;
    b.a = a;

    const resA = isCyclic(a);
    const resC = isCyclic(c);

    expect(resA).toBe(true);
    expect(resC).toBe(false);
});
