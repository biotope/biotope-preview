import { renderObjectKnob } from "./render-object-knob"

test("returns object knob", () => {
    expect(renderObjectKnob({name: "knobName", defaultValue: {x: 1}})).toBe(`\${object('knobName', {\"x\":1})}`)
});

test("returns object knob with groupId", () => {
    expect(renderObjectKnob({name: "knobName", defaultValue: {x: 1}, groupId: "123"})).toBe(`\${object('knobName', {\"x\":1}, '123')}`)
});