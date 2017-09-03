jest.disableAutomock();

import collectionContains from "../collectionContains"

test("Test Config", () => {
    const datasource = [{
        name: "Jerry Seinfeld",
        age: 28
    },  {
        name: "Cosmo Kramer",
        age: 33
    }];

    expect(collectionContains(datasource, {name: "Jerry Seinfeld"})).toBe(true);
    expect(collectionContains(datasource, {name: "Jerry Seinfeld", age: 28})).toBe(true);
    expect(collectionContains(datasource, {name: "JERRY SEINFELD"})).toBe(false);
    expect(collectionContains(datasource, {name: "JERRY SEINFELD"}, false, true)).toBe(true);
    expect(collectionContains(datasource, {name: "George Costanza"})).toBe(false);

    expect(collectionContains(datasource, {age: (v) => v > 30})).toBe(true);
    expect(collectionContains(datasource, {age: (v) => v > 40})).toBe(false);
    expect(collectionContains(datasource, {name: "Jerry Seinfeld", age: (v) => v > 30})).toBe(false);
    expect(collectionContains(datasource, {name: "Jerry Seinfeld", age: (v) => v > 20})).toBe(true);
});
