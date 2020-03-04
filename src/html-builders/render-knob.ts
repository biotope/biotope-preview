import { renderStringKnob } from "./knob-builders/render-string-knob";
import { IKnobConfiguration } from "../interfaces/i-knob-configuration";
import { renderNumberKnob } from "./knob-builders/render-number-knob";
import { renderBooleanKnob } from "./knob-builders/render-boolean-knob";
import { convertValueToAttribute } from "./convert-value-to-attribute";

export const renderKnob = ({name, type, groupId, options}: IKnobConfiguration, defaultValue: any) => {
    switch(type) {
        case 'text': return renderStringKnob({name, groupId, defaultValue}, 'text');
        case 'color': return renderStringKnob({name, groupId, defaultValue}, 'color');
        case 'number': return renderNumberKnob({name, groupId, defaultValue, options});
        case 'boolean': return renderBooleanKnob({name, groupId, defaultValue});
        default: return convertValueToAttribute(defaultValue);
    }
}