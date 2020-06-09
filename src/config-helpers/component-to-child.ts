import { ComponentConfiguration } from '../interfaces/component-configuration';
import { HtmlElementConfiguration } from '../interfaces/html-element-configuration';

export const componentToChild = (
  componentConfig: ComponentConfiguration,
  configKey: string,
): HtmlElementConfiguration => ({
  htmlTagName: componentConfig.htmlTagName,
  ...(componentConfig.resources && { resources: componentConfig.resources }),
  ...componentConfig.configurations[configKey],
});
