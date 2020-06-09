import { StoryConfiguration } from '../interfaces/story-configuration';
import { generateHtmlTag } from './generate-html-tag';
import { camelize } from './helpers/camelize';

const configTemplate = `
export const #configName = () => {
    return \`#htmlTag\`;
}`;

export const generateStoryString = (
  config: StoryConfiguration,
  title: string,
  htmlTagName: string,
  resources?: string[],
): string => {
  const elementString = generateHtmlTag({ ...config, htmlTagName, resources });
  let configString = configTemplate.replace(/#configName/g, camelize(title));

  configString = configString.replace('#htmlTag', elementString);

  return configString;
};
