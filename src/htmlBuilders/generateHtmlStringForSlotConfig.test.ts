import { generateHtmlStringForSlotConfig } from "./generateHtmlStringForSlotConfig";

test("returns HTML string for tag name only", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div"
    })).toBe('<div></div>')
});

test("returns HTML string with innerHTML", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        innerHTML: "Test"
    })).toBe('<div>Test</div>')
});

test("returns HTML string with props", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        props: {
            prop1: "test",
            prop2: 2,
            prop3: {
                subProp1: "test"
            }
        }
    })).toBe(`<div prop1=\"test\" prop2=2 prop3=\"{'subProp1':'test'}\"></div>`);
});

test("returns HTML string with resources", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ]
    })).toBe(`<div data-resources="[{paths : ['path/to/resource.js']}]"></div>`);
});

test("returns HTML string with slot", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        slot: [
            {
                htmlTagName: "div"
            }
        ]
    })).toBe(`<div><div></div></div>`);
});

test("returns innerHTML only if no slot is configured", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        slot: [
            {
                htmlTagName: "div"
            }
        ],
        innerHTML: "Test"
    })).toBe(`<div><div></div></div>`);
});

test("returns HTML string for full configuration", () => {
    expect(generateHtmlStringForSlotConfig({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ],
        props: {
            prop1: "test",
            prop2: 2,
            prop3: {
                subProp1: "test"
            }
        },
        slot: [
            {
                htmlTagName: "div"
            }
        ],
        innerHTML: "Test"
    })).toBe(`<div data-resources="[{paths : ['path/to/resource.js']}]" prop1=\"test\" prop2=2 prop3=\"{'subProp1':'test'}\"><div></div></div>`);
});