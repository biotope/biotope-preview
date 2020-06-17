import { ComponentConfiguration } from '../interfaces/component-configuration';
import { generateStoryString } from './generate-story-string';

const storyTemplate = `import { text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
#docsImport

export default { title: #componentName, parameters: {
    docs: {
        page: #docsUsage
    }

} };

#configs;
`;

export const generateComponentString = (
  config: ComponentConfiguration,
  globalResources: string[] = [],
): string => {
  if (!config) {
    throw Error('Could not read the story configuration.');
  }

  const configs = Object.keys(config.configurations).map((key) => generateStoryString(
    config.configurations[key],
    key,
    config.htmlTagName,
    [...(config.resources ? config.resources : []), ...globalResources],
  )).join(';');

  return storyTemplate
    .replace('#docsImport', config.docs ? `import docs from './${config.htmlTagName}.docs.mdx';` : '')
    .replace('#docsUsage', config.docs ? 'docs' : 'null')
    .replace('#configs', configs)
    .replace(/#componentName/g, `"${config.title}"`);
};
