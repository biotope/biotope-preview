import { logger } from './logger';

import path = require('path');
import storybook = require('@storybook/html/standalone');

export const runStorybook = ({ staticDir = 'dist/resources/components', outputDir = 'dist' }): Promise<void> => {
  logger.info('Starting Storybook...');
  return storybook({
    mode: 'static',
    configDir: path.resolve(__dirname, '../.storybook'),
    staticDir: [`${process.cwd()}/${staticDir}`],
    outputDir: `${process.cwd()}/${outputDir}/preview`,
  }).catch((err: Error) => {
    logger.error(err);
    logger.error("Couldn't run storybook");
  });
};
