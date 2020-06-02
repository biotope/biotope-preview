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
    const children = config.children ? config.children.map(child => generateHtmlTag(child)).join('') : config.innerHTML;
    
    const resources = config.resources && config.resources.length > 0 ? ` data-resources=\"[{paths : [${config.resources.map((r => `'${r}'`))}]}]"` : '';
    const htmlBefore = config.containingHTML ? config.containingHTML.split('#content')[0] : '';
    const htmlAfter = config.containingHTML ? config.containingHTML.split('#content')[1] : '';
    return `${htmlBefore}<${tagName}${resources}${propsString}>${children ? children : ''}</${tagName}>${htmlAfter}`;
};