import { IComponentConfiguration } from "../interfaces/i-component-configuration";
import { generateStoryHtml } from './generate-story-html';

const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default { title: #componentName, decorators: [withKnobs, withA11y] };

#configs;
`

export const generateComponentHtml = (config: IComponentConfiguration): string => {
    if (!config) {
        throw Error('Could not read the story configuration.')
    }
    const configs = Object.keys(config.configurations).map(key => generateStoryHtml(config.configurations[key], key, config.htmlTagName, config.resources)).join(';');
    const templates = config.templates ? Object.keys(config.templates).map(key => {
        return config.templates ? generateStoryHtml(config.templates[key], key, config.templates[key].htmlTagName, config.templates[key].resources) : '';
    }
    ).join(';') : '';
    return storyTemplate
        .replace('#configs', `${configs}${templates ? `; ${templates}`: ''}`)
        .replace(/#componentName/g, `"${config.title}"`);
}