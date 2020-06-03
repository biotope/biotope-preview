"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponentString = void 0;
const generate_story_string_1 = require("./generate-story-string");
const storyTemplate = `import { text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
#docsImport

export default { title: #componentName, parameters: {
    docs: {
        page: #docsUsage
    }

} };

#configs;
`;
exports.generateComponentString = (config, globalResources = []) => {
    if (!config) {
        throw Error('Could not read the story configuration.');
    }
    const configs = Object.keys(config.configurations).map(key => generate_story_string_1.generateStoryString(config.configurations[key], key, config.htmlTagName, [...(config.resources ? config.resources : []), ...globalResources])).join(';');
    const templates = config.templates ? Object.keys(config.templates).map(key => {
        if (config.templates) {
            const templateConfig = config.templates[key];
            return config.templates ? generate_story_string_1.generateStoryString(templateConfig, key, config.htmlTagName, [...(config.resources ? config.resources : []), ...globalResources]) : '';
        }
        else {
            return '';
        }
    }).join(';') : '';
    return storyTemplate
        .replace('#docsImport', config.docs ? `import docs from './${config.htmlTagName}.docs.mdx';` : '')
        .replace('#docsUsage', config.docs ? 'docs' : 'null')
        .replace('#configs', `${configs}${templates ? `; ${templates}` : ''}`)
        .replace(/#componentName/g, `"${config.title}"`);
};
//# sourceMappingURL=generate-component-string.js.map