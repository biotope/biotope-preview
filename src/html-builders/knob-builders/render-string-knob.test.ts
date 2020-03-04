import { renderStringKnob } from "./render-string-knob"

test("returns text knob", () => {
    expect(renderStringKnob({name: "knobName", defaultValue: "text"})).toBe(`\"\${text('knobName', 'text')}\"`)
});

test("returns text knob with groupId", () => {
    expect(renderStringKnob({name: "knobName", defaultValue: "text", groupId: "123"})).toBe(`\"\${text('knobName', 'text', '123')}\"`)
});

test("returns color knob", () => {
    expect(renderStringKnob({name: "knobName", defaultValue: "#fff", groupId: "123"}, 'color')).toBe(`\"\${color('knobName', '#fff', '123')}\"`)
});