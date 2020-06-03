import { renderBooleanKnob } from "./render-boolean-knob"

test("returns boolean knob", () => {
    expect(renderBooleanKnob({label: "knobName", defaultValue: true})).toBe(`\"\${boolean('knobName', true)}\"`)
});

test("returns boolean knob with groupId", () => {
    expect(renderBooleanKnob({label: "knobName", defaultValue: true, groupId: "123"})).toBe(`\"\${boolean('knobName', true, '123')}\"`)
});