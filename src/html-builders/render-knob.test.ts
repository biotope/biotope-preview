import { renderKnob } from './render-knob';

test("returns value with knob for number", () => {
    expect(renderKnob({name: 'Test', type: 'number'}, 1)).toBe(`\"\${number('Test', 1, {})}\"`);
});

test("returns value with knob for text", () => {
    expect(renderKnob({name: 'Test', type: 'text'}, 'test')).toBe(`\"\${text('Test', 'test')}\"`);
});

test("returns value with knob for boolean", () => {
    expect(renderKnob({name: 'Test', type: 'boolean'}, true,)).toBe(`\"\${boolean('Test', true)}\"`);
});

test("returns value with knob for color", () => {
    expect(renderKnob({name: 'Test', type: 'color'}, '#fff',)).toBe(`\"\${color('Test', '#fff')}\"`);
});