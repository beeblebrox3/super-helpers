jest.autoMockOff();

const ObjectHelper = require("../index");
const equals = (actual, expected) => expect(actual).toBe(expected);

const testObject = {
    a: {
        a: {
            b: 1,
            c: 2,
            d: null,
        },
        b: 1,
    },
};

test("Test getFlattened", () => {
    equals(ObjectHelper.getFlattened("a.b", testObject, "x"), 1);
    equals(ObjectHelper.getFlattened("a.a.b", testObject, "x"), 1);
    equals(ObjectHelper.getFlattened("a.a.c", testObject, "x"), 2);
    equals(ObjectHelper.getFlattened("a.a.f", testObject, "x"), "x");
});

test("Test setFlattened", () => {
    let localTestObject = Object.assign({}, testObject);
    let response = ObjectHelper.setFlattened("a.b", 2, localTestObject);
    equals(response.a.b, 2);

    localTestObject = Object.assign({}, testObject);
    equals(response.a.c, undefined);
    response = ObjectHelper.setFlattened("a.c", 2, localTestObject);
    equals(response.a.c, 2);
});

test("Test firstKey", () => {
    equals(ObjectHelper.firstKey(testObject), "a");
    equals(ObjectHelper.firstKey(testObject.a.a), "b");
});

test("Test getFirstFlattened", () => {
    let response = ObjectHelper.getFirstFlattened(
        ["a.c.d", "a.a.b", "a.a.c"],
        testObject,
        "default"
    );

    equals(response, 1);

    response = ObjectHelper.getFirstFlattened(
        ["a.c.d", "b.c.a"],
        testObject,
        "default"
    );

    equals(response, "default");
});
