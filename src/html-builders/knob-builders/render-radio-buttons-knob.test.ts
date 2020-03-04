import { renderRadioButtonsKnob } from "./render-radio-buttons-knob"

test("returns object knob", () => {
    expect(renderRadioButtonsKnob({name: "knobName", defaultValue: 'test', options: {Test: 'test', Test2: 'test2'}})).toBe(`\"\${radios('knobName', {'Test':'test','Test2':'test2'}, 'test')}\"`)
});

test("returns object knob with groupId", () => {
    expect(renderRadioButtonsKnob({name: "knobName", defaultValue: 'test', options: {Test: 'test', Test2: 'test2'}, groupId: "123"})).toBe(`\"\${radios('knobName', {'Test':'test','Test2':'test2'}, 'test', '123')}\"`)
});