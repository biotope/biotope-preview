import { renderKnob } from './renderKnob';

test("returns value with knob for number", () => {
    expect(renderKnob('Test', 1, 'number')).toBe(`\${number("Test", 1)}`);
});

test("returns value with knob for text", () => {
    expect(renderKnob('Test', 'test', 'text')).toBe(`\${text("Test", "test")}`);
});

test("returns value with knob for boolean", () => {
    expect(renderKnob('Test', true, 'boolean')).toBe(`\${boolean("Test", true)}`);
});

test("returns value with knob for color", () => {
    expect(renderKnob('Test', '#fff', 'color')).toBe(`\${color("Test", "#fff")}`);
});