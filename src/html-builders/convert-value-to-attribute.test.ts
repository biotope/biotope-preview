import { convertValueToAttribute } from './convert-value-to-attribute';

test("returns value for number", () => {
    expect(convertValueToAttribute(1)).toBe(1);
});

test("returns value for string", () => {
    expect(convertValueToAttribute("test")).toBe(`"test"`);
});

test("returns value for object", () => {
    expect(convertValueToAttribute({test1: "test"})).toBe(`'{\"test1\":\"test\"}'`);
});

test("returns value for number array", () => {
    expect(convertValueToAttribute([1, 2])).toBe(`'[1,2]'`);
});

test("returns value for string array", () => {
    expect(convertValueToAttribute(['1','2'])).toBe(`'[\"1\",\"2\"]'`);
});