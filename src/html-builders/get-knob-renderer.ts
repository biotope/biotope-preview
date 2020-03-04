import { renderStringKnob } from "./knob-builders/render-string-knob";
import { renderNumberKnob } from "./knob-builders/render-number-knob";
import { renderBooleanKnob } from "./knob-builders/render-boolean-knob";
import { renderArrayKnob } from "./knob-builders/render-array-knob";
import { renderObjectKnob } from "./knob-builders/render-object-knob";
import { renderFilesKnob } from "./knob-builders/render-files-knob";
import { renderSelectKnob } from "./knob-builders/render-select-knob";
import { renderRadioButtonsKnob } from "./knob-builders/render-radio-buttons-knob";

export const getKnobRenderer = (
    type: string,
) => {
    switch(type) {
        case 'text': return renderStringKnob;
        case 'color': return renderStringKnob;
        case 'number': return renderNumberKnob;
        case 'boolean': return renderBooleanKnob;
        case 'object': return renderObjectKnob;
        case 'array': return renderArrayKnob;
        case 'select': return renderSelectKnob;
        case 'radioButtons': return renderRadioButtonsKnob;
        case 'files': return renderFilesKnob;
        default: return renderStringKnob;
    }
}