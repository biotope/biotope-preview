import { renderStringKnob } from "./knob-builders/render-string-knob";
import { IKnobConfiguration } from "../interfaces/i-knob-configuration";
import { renderNumberKnob } from "./knob-builders/render-number-knob";
import { renderBooleanKnob } from "./knob-builders/render-boolean-knob";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { renderArrayKnob } from "./knob-builders/render-array-knob";
import { renderObjectKnob } from "./knob-builders/render-object-knob";

export const renderKnob = ({name, type, groupId, options}: IKnobConfiguration, defaultValue: any) => {
    switch(type) {
        case 'text': return renderStringKnob({name, groupId, defaultValue}, 'text');
        case 'color': return renderStringKnob({name, groupId, defaultValue}, 'color');
        case 'number': return renderNumberKnob({name, groupId, defaultValue, options});
        case 'boolean': return renderBooleanKnob({name, groupId, defaultValue});
        case 'object': return renderObjectKnob({name, groupId, defaultValue});
        case 'array': return renderArrayKnob({name, groupId, defaultValue});
        case 'select': return renderBooleanKnob({name, groupId, defaultValue});
        case 'radioButton': return renderBooleanKnob({name, groupId, defaultValue});
        case 'options': return renderBooleanKnob({name, groupId, defaultValue});
        case 'files': return renderBooleanKnob({name, groupId, defaultValue});
        case 'date': return renderBooleanKnob({name, groupId, defaultValue});
        case 'button': return renderBooleanKnob({name, groupId, defaultValue});
        default: return convertValueToAttribute(defaultValue);
    }
}