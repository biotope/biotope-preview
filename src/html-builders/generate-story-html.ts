import { getKnobRenderer } from "./get-knob-renderer";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { IStoryConfiguration } from "../interfaces/i-story-configuration";
import { generateHtmlTag } from "./generate-html-tag";
import { camelize } from "./helpers/camelize";

const configTemplate = `
export const #configName = () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
}`

export const generateStoryHtml = (config: IStoryConfiguration, title: string, htmlTagName: string) => {
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
    configString = configString.replace(/#configName/g, camelize(title));

    if(config.children) {
        configString = configString.replace('#content', config.children.map(child => generateHtmlTag(child)).join(''));
    } else if(config.innerHTML) {
        configString = configString.replace('#content', config.innerHTML);
    } else {
        configString = configString.replace('#content', '');
    }

    return configString;
}