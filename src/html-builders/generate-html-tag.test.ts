import { generateHtmlTag } from "./generate-html-tag";

test("returns HTML string for tag name only", () => {
    expect(generateHtmlTag({
        htmlTagName: "div"
    })).toBe('<div></div>')
});

test("returns HTML string with innerHTML", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        innerHTML: "Test"
    })).toBe('<div>Test</div>')
});

test("returns HTML string with containing html", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        containingHTML: "<article>#content</article>",
        innerHTML: "Test"
    })).toBe('<article><div>Test</div></article>')
});

test("returns HTML string with props", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        props: [
            {
                name: "prop1",
                value: "test"
            },
            {
                name: "prop2",
                value: 2
            },
            {
                name: "prop3",
                value: {
                    subProp1: "test"
                }
            }
        ],
    })).toBe(`<div prop1=\"test\" prop2=2 prop3='{\"subProp1\":\"test\"}'></div>`);
});

test("returns HTML string with text knob", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        props: [
            {
                name: "prop1",
                value: "test",
                knob: {
                    label: "Prop 1",
                    type: "text"
                }
            },
        ],
    })).toBe(`<div prop1=\"\${text('Prop 1', 'test')}\"></div>`);
});

test("returns HTML string with object knob", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        props: [
            {
                name: "prop1",
                value: {x: 1},
                knob: {
                    label: "Object Prop",
                    type: "object"
                }
            },
        ],
    })).toBe(`<div prop1='\${JSON.stringify(object('Object Prop', {\"x\":1})).replace(/"/g, '\"').replace(/'/g, '\"')}'></div>`);
});

test("returns HTML string with resources", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ]
    })).toBe(`<div data-resources="[{paths : ['path/to/resource.js']}]"></div>`);
});

test("returns HTML string with slot", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        children: [
            {
                htmlTagName: "div"
            }
        ]
    })).toBe(`<div><div></div></div>`);
});

test("returns innerHTML only if no slot is configured", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        children: [
            {
                htmlTagName: "div"
            }
        ],
        innerHTML: "Test"
    })).toBe(`<div><div></div></div>`);
});

test("returns HTML string for full configuration", () => {
    expect(generateHtmlTag({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ],props: [
            {
                name: "prop1",
                value: "test"
            },
            {
                name: "prop2",
                value: 2
            },
            {
                name: "prop3",
                value: {
                    subProp1: "test"
                }
            }
        ],
        children: [
            {
                htmlTagName: "div"
            }
        ],
        innerHTML: "Test"
    })).toBe(`<div data-resources="[{paths : ['path/to/resource.js']}]" prop1=\"test\" prop2=2 prop3='{\"subProp1\":\"test\"}'><div></div></div>`);
});