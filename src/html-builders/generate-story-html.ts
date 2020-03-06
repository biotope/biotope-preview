import { getKnobRenderer } from "./get-knob-renderer";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { IStoryConfiguration } from "../interfaces/i-story-configuration";
import { generateHtmlTag } from "./generate-html-tag";

const configTemplate = `
export const #configName = () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
}`

export const generateStoryHtml = (config: IStoryConfiguration, htmlTagName: string) => {
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
    let configString = configTemplate.replace('#attributes', propsString);

    configString = configString.replace(/#tagName/g, htmlTagName);
    configString = configString.replace(/#configName/g, camelize(config.title));

    if(config.children) {
        configString = configString.replace('#content', config.children.map(child => generateHtmlTag(child)).join(''));
    } else if(config.innerHTML) {
        configString = configString.replace('#content', config.innerHTML);
    } else {
        configString = configString.replace('#content', '');
    }

    return configString;
}

const camelize = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}