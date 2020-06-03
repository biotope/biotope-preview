import { renderFilesKnob } from "./render-files-knob"

test("returns files knob", () => {
    expect(renderFilesKnob({label: "knobName"})).toBe(`\"\${files('knobName')}\"`)
});

test("returns files knob with accepted formats", () => {
    expect(renderFilesKnob({label: "knobName", acceptedFormats: ['pdf', 'jpg']})).toBe(`\"\${files('knobName', \".pdf, .jpg\")}\"`)
});

test("returns files knob with accepted formats and group id", () => {
    expect(renderFilesKnob({label: "knobName", acceptedFormats: ['pdf', 'jpg'], groupId: '123'})).toBe(`\"\${files('knobName', \".pdf, .jpg\", [], '123')}\"`)
});