import { renderSelectKnob } from "./render-select-knob"

test("returns select knob with options object", () => {
    expect(renderSelectKnob({name: "knobName", defaultValue: 1, options: {x: 1, y: 2}})).toBe(`\"\${select('knobName', {\"x\":1,\"y\":2}, 1)}\"`)
});

test("returns select knob with options array", () => {
    expect(renderSelectKnob({name: "knobName", defaultValue: '1', options: ['1', '2']})).toBe(`\"\${select('knobName', [\"1\",\"2\"], \"1\")}\"`)
});

test("returns select knob with options array of objects", () => {
    expect(renderSelectKnob({name: "knobName", defaultValue: {z: 3, a: 4}, options: [{x: 1, y: 2}, {z: 3, a: 4}]})).toBe(`\"\${select('knobName', [{\"x\":1,\"y\":2},{\"z\":3,\"a\":4}], {\"z\":3,\"a\":4})}\"`)
});

test("returns select knob with groupId", () => {
    expect(renderSelectKnob({name: "knobName", defaultValue: 1, options: {x: 1, y: 2}, groupId: "123"})).toBe(`\"\${select('knobName', {\"x\":1,\"y\":2}, 1, '123')}\"`)
});