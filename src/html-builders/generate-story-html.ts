import { IStoryConfiguration } from "../interfaces/i-story-configuration";
import { convertValueToAttribute } from "./convert-value-to-attribute";
import { generateSlotHtml } from "./generate-slot-html";
import { getKnobRenderer } from "./get-knob-renderer";


const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default { title: #componentName, decorators: [withKnobs, withA11y] };

#configs;
`

const configTemplate = `
export const #configName = () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
}`

export const generateStoryHtml = (storyConfig: IStoryConfiguration): string => {
    if(!storyConfig) {
        throw Error('Could not read the story configuration.')
    }
    const tagName = storyConfig.htmlTagName;
    const configs = storyConfig.previewConfigs.map(config => {
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

        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, camelize(config.name));

        if(config.slot) {
            configString = configString.replace('#content', config.slot.map(slotConfig => generateSlotHtml(slotConfig)).join(''));
        } else if(config.innerHTML) {
            configString = configString.replace('#content', config.innerHTML);
        } else {
            configString = configString.replace('#content', '');
        }

        return configString;
    }).join(';');
    return storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `"${storyConfig.name}"`)
        .replace(/#dependencies/g, storyConfig.resources ? ` data-resources=\"[{paths : [${(storyConfig.resources).map((r => `'${r}'`))}]}]\"` : '');
}

const camelize = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}