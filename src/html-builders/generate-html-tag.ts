import { IHtmlElementConfiguration } from "../interfaces/i-html-element-configuration";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { getKnobRenderer } from "./get-knob-renderer";

export const generateHtmlTag = (config: IHtmlElementConfiguration): string => {
    const tagName = config.htmlTagName;
    const props = config.props || [];
    const propsString = props.map(
        prop => {
            const { knob, value, name } = prop;
            if (knob) {
                const renderKnob = getKnobRenderer(knob.type);
                return ` ${name}=${renderKnob({...knob, defaultValue: value} as any)}`
            }
            return ` ${name}=${convertValueToAttribute(value)}`
        }
    ).join('');
    const slot = config.children ? config.children.map(child => generateHtmlTag(child)).join('') : config.innerHTML;
    const resources = config.resources ? ` data-resources=\"[{paths : [${config.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};