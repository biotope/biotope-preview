import { IComponentConfiguration } from "../interfaces/i-component-configuration";
import { generateStoryHtml } from './generate-story-html';

const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default { title: #componentName, decorators: [withKnobs, withA11y] };

#configs;
`

export const generateComponentHtml = (config: IComponentConfiguration): string => {
    if(!config) {
        throw Error('Could not read the story configuration.')
    }
    const configs = config.configurations.map(storyConfig => generateStoryHtml(storyConfig, config.htmlTagName)).join(';');
    return storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `"${config.title}"`)
        .replace(/#dependencies/g, config.resources ? ` data-resources=\"[{paths : [${(config.resources).map((r => `'${r}'`))}]}]\"` : '');
}