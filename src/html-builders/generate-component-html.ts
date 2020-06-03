import { IComponentConfiguration } from "../interfaces/i-component-configuration";
import { generateStoryHtml } from './generate-story-html';

const storyTemplate = `import { text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
#docImport

export default { title: #componentName, parameters: {
    docs: {
        page: #docUsage
    }

} };

#configs;
`

export const generateComponentHtml = (config: IComponentConfiguration, globalResources: string[] = []): string => {
    if (!config) {
        throw Error('Could not read the story configuration.')
    }

    const configs = Object.keys(config.configurations).map(key => generateStoryHtml(
        config.configurations[key],
        key,
        config.htmlTagName,
        [...(config.resources ? config.resources : []), ...globalResources])).join(';');

    const templates = config.templates ? Object.keys(config.templates).map(key => {
        if(config.templates) {
            const templateConfig = config.templates[key];
            return config.templates ? generateStoryHtml(
                templateConfig,
                key,
                config.htmlTagName,
                [...(config.resources ? config.resources : []),...globalResources]) : '';
        } else {
            return ''
        }
    }
    ).join(';') : '';
    return storyTemplate
        .replace('#docImport', config.doc ? `import docs from './${config.htmlTagName}.docs.mdx';` : '')
        .replace('#docUsage', config.doc ? 'docs' : 'null')
        .replace('#configs', `${configs}${templates ? `; ${templates}`: ''}`)
        .replace(/#componentName/g, `"${config.title}"`);
}