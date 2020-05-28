"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_story_html_1 = require("./generate-story-html");
const storyTemplate = `import { storiesOf } from '@storybook/html';
import { text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";

export default { title: #componentName };

#configs;
`;
exports.generateComponentHtml = (config, globalResources = []) => {
    if (!config) {
        throw Error('Could not read the story configuration.');
    }
    const configs = Object.keys(config.configurations).map(key => generate_story_html_1.generateStoryHtml(config.configurations[key], key, config.htmlTagName, [...(config.resources ? config.resources : []), ...globalResources])).join(';');
    const templates = config.templates ? Object.keys(config.templates).map(key => {
        if (config.templates) {
            const templateConfig = config.templates[key];
            return config.templates ? generate_story_html_1.generateStoryHtml(templateConfig, key, config.htmlTagName, [...(config.resources ? config.resources : []), ...globalResources]) : '';
        }
        else {
            return '';
        }
    }).join(';') : '';
    return storyTemplate
        .replace('#configs', `${configs}${templates ? `; ${templates}` : ''}`)
        .replace(/#componentName/g, `"${config.title}"`);
};
//# sourceMappingURL=generate-component-html.js.map