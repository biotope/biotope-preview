import * as fs from 'fs';
import { IStoryConfiguration } from "./interfaces/IStoryConfiguration";
import { renderValue } from "./renderValue";

const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`

const knobsTemplate = `
.addDecorator(withKnobs)`

const configTemplate = `
.add(#configName, () => {
    return \`<#tagName data-resources=\"[{paths : #dependencies}]\" #attributes></#tagName>\`;
})`

export const createStoriesFileForStoryConfig = (storyConfig: IStoryConfiguration) => {
    const tagName = storyConfig.htmlTagName;
    const knobs = storyConfig.knobs;
    const configs = storyConfig.previewConfigs.map(config => {
        const props = config.props;
        const propsString = Object.keys(props).map(propKey => `${propKey}${props[propKey] ? renderValue(props[propKey], propKey, knobs) : ''}`).join(' ');
        let configString = configTemplate.replace('#attributes', propsString);

        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, `'${config.name}'`);

        return `${knobs ? knobsTemplate + configString : configString}`;
    }).join('');
    const storyString = storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `'${storyConfig.name}'`)
        .replace(/#dependencies/g, `[${storyConfig.resources.map((r => `'${r}'`))}]`);

    fs.writeFile(`./stories/${tagName}.stories.js`, storyString, (err) => {
        if (err) throw err;
        console.log(storyString);
        console.log('Saved!');
    });
}