import { renderObjectKnob } from "./render-object-knob"

test("returns object knob", () => {
    expect(renderObjectKnob({name: "knobName", defaultValue: {x: 1}})).toBe(`'\${JSON.stringify(object('knobName', {\"x\":1})).replace(/"/g, '\"').replace(/'/g, '\"')}'`)
});

test("returns object knob with groupId", () => {
    expect(renderObjectKnob({name: "knobName", defaultValue: {x: 1}, groupId: "123"})).toBe(`'\${JSON.stringify(object('knobName', {\"x\":1}, '123')).replace(/"/g, '\"').replace(/'/g, '\"')}'`)
});