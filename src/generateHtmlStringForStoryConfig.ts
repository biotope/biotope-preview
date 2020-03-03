import { IStoryConfiguration } from "./interfaces/IStoryConfiguration";
import { renderValue } from "./renderValue";
import { generateHtmlStringForSlotConfig } from "./generateHtmlStringForSlotConfig";


const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`

const knobsTemplate = `
.addDecorator(withKnobs)`

const configTemplate = `
.add(#configName, () => {
    return \`<#tagName data-resources=\"[{paths : #dependencies}]\" #attributes>#content</#tagName>\`;
})`

export const generateHtmlStringForStoryConfig = (storyConfig: IStoryConfiguration): string => {
    if(!storyConfig) {
        throw Error('Could not read the story configuration.')
    }
    const tagName = storyConfig.htmlTagName;
    const knobs = storyConfig.knobs;
    const configs = storyConfig.previewConfigs.map(config => {
        const props = config.props || {};
        const propsString = Object.keys(props).map(propKey => `${propKey}${props[propKey] ? renderValue(props[propKey], propKey, knobs) : ''}`).join(' ');
        let configString = configTemplate.replace('#attributes', propsString);

        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, `'${config.name}'`);

        if(config.slot) {
            configString = configString.replace('#content', config.slot.map(slotConfig => generateHtmlStringForSlotConfig(slotConfig)).join(''));
        } else if(config.innerHTML) {
            configString = configString.replace('#content', config.innerHTML);
        } else {
            configString = configString.replace('#content', '');
        }

        return `${knobs ? knobsTemplate + configString : configString}`;
    }).join('');
    return storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `'${storyConfig.name}'`)
        .replace(/#dependencies/g, `[${storyConfig.resources.map((r => `'${r}'`))}]`);
}