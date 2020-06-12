import * as fs from 'fs-extra';
import { logger } from '../logger';
import { createTagStringForResource } from './create-tag-string-for-resource';

export const addGlobalResourcesToPreviewHead = async (
  globalResources: string[],
): Promise<void | Error> => {
  logger.info('Adding scripts/links for global resources...');
  const tags: string[] = [];
  globalResources.forEach((resourcePath: string) => {
    const tag = createTagStringForResource(resourcePath);
    if (tag) {
      tags.push(tag);
    } else {
      logger.error('One of your global resources is of an unsupported file type. Please only use .js and .css files as global resources');
    }
  });
  const previewHead = await fs.readFile(`${__dirname}/../../.storybook/preview-head-template.html`, 'utf8');
  await fs.writeFile(`${__dirname}/../../.storybook/preview-head.html`, previewHead.replace('#GLOBAL_RESOURCES', tags.join('')));
};
