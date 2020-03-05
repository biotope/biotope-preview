import { renderBooleanKnob } from "./render-boolean-knob"

test("returns boolean knob", () => {
    expect(renderBooleanKnob({name: "knobName", defaultValue: true})).toBe(`\"\${boolean('knobName', true)}\"`)
});

test("returns boolean knob with groupId", () => {
    expect(renderBooleanKnob({name: "knobName", defaultValue: true, groupId: "123"})).toBe(`\"\${boolean('knobName', true, '123')}\"`)
});