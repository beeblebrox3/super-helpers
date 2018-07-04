jest.autoMockOff();

const flatten = require("../flatten");
const { setFlattened } = require('../index');

test("test flatten function", () => {
    const input = {
        a: 1,
        b: "a",
        c: ["a", "b"],
        d: {
            e: {
                g: 1,
            },
            ee: "a",
            c: {
                a: {a: {b: 1}},
            },
        },
    };

    const res = flatten(input);

    expect(res["a"]).toBe(1);
    expect(res["b"]).toBe("a");
    expect(res["c.0"]).toBe("a");
    expect(res["c.1"]).toBe("b");
    expect(res["d.e.g"]).toBe(1);
    expect(res["d.ee"]).toBe("a");
    expect(res["d.c.a.a.b"]).toBe(1);
});

test("test flatten function on circular reference (cyclic reference)", () => {
    let a = {};
    let b = {};
    a.b = b;
    b.a = a;

    expect(() => flatten(a)).toThrow();
});

test("test flatten function with null and undefined", () => {
    const input = {
        a: 1,
        b: null,
        c: undefined,
        d: {
            e: 2,
            f: undefined,
        },
    };

    const res = flatten(input);
    expect(res["a"]).toBe(1);
    expect(res["b"]).toBe(null);
    expect(res["c"]).toBe(undefined);
    expect(res["d.e"]).toBe(2);
    expect(res["d.f"]).toBe(undefined);
});

test("another use case for setFlattened", () => {
    const source = [
        "a",
        "a.a",
        "a.b",
        "a.b.c",
        "a.b.d",
    ];

    const res = {};
    source.forEach(piece => {
        setFlattened(piece, {}, res);
    });

    expect(res).toMatchObject({
        a: {
            a: {},
            b: {
                c: {},
                d: {},
            },
        },
    });
});
