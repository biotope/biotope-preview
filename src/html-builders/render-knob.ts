import { renderStringKnob } from "./knob-builders/render-string-knob";
import { renderNumberKnob } from "./knob-builders/render-number-knob";
import { renderBooleanKnob } from "./knob-builders/render-boolean-knob";
import { renderArrayKnob } from "./knob-builders/render-array-knob";
import { renderObjectKnob } from "./knob-builders/render-object-knob";
import { renderFilesKnob } from "./knob-builders/render-files-knob";
import { renderSelectKnob } from "./knob-builders/render-select-knob";
import { renderRadioButtonsKnob } from "./knob-builders/render-radio-buttons-knob";
import { IGenericKnobConfiguration, IFilesKnobConfiguration, IRadioButtonsKnobConfiguration, ISelectKnobConfiguration, IArrayKnobConfiguration, IStringKnobConfiguration, INumberKnobConfiguration, IBooleanKnobConfiguration,IObjectKnobConfiguration } from "../interfaces/i-knob-configuration";

export const renderKnob = (
    knobConfig: IGenericKnobConfiguration,
    type: string,
) => {
    switch(type) {
        case 'text': return renderStringKnob((knobConfig as IStringKnobConfiguration), 'text');
        case 'color': return renderStringKnob((knobConfig as IStringKnobConfiguration), 'color');
        case 'number': return renderNumberKnob((knobConfig as INumberKnobConfiguration));
        case 'boolean': return renderBooleanKnob((knobConfig as IBooleanKnobConfiguration));
        case 'object': return renderObjectKnob((knobConfig as IObjectKnobConfiguration));
        case 'array': return renderArrayKnob((knobConfig as IArrayKnobConfiguration));
        case 'select': return renderSelectKnob((knobConfig as ISelectKnobConfiguration));
        case 'radioButtons': return renderRadioButtonsKnob((knobConfig as IRadioButtonsKnobConfiguration));
        case 'files': return renderFilesKnob((knobConfig as IFilesKnobConfiguration));
        default: return '';
    }
}