import { ISlottedConfiguration } from "../interfaces/i-story-configuration";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { renderKnob } from "./render-knob";

export const generateSlotHtml = (slotConfig: ISlottedConfiguration): string => {
    const tagName = slotConfig.htmlTagName;
    const props = slotConfig.props || [];
    const propsString = props.map(
        prop => {
            const { knob, value, name } = prop;
            return ` ${name}=${knob ? renderKnob({...knob, defaultValue: value}, knob.type) : convertValueToAttribute(value)}`
        }
    ).join('');
    const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => generateSlotHtml(slotConfig)).join('') : slotConfig.innerHTML;
    const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};