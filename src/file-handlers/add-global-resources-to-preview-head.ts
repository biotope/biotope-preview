import * as fs from 'fs-extra';
import { logger } from '../logger';
import { createTagStringForResource } from './create-tag-string-for-resource';

export const addGlobalResourcesToPreviewHead = (
  globalResources: string[],
): void => {
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
  const previewHead = fs.readFileSync(`${__dirname}/../../.storybook/preview-head-template.html`, 'utf8');
  fs.writeFileSync(`${__dirname}/../../.storybook/preview-head.html`, previewHead.replace('#GLOBAL_RESOURCES', tags.join('')));
};
