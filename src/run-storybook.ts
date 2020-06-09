import { logger } from './logger/index';

import path = require('path');
import storybook = require('@storybook/html/standalone');

export const runStorybook = ({ staticDir = 'dist/resources/components', mode = 'static', outputDir = 'dist' }): Promise<void> => {
  logger.info('Starting Storybook...');
  if (mode === 'static') {
    return storybook({
      mode: 'static',
      configDir: path.resolve(__dirname, '../.storybook'),
      staticDir: [`${process.cwd()}/${staticDir}`],
      outputDir: `${process.cwd()}/${outputDir}/preview`,
    }).catch((err: Error) => {
      logger.error(err);
      logger.error("Couldn't run storybook");
    });
  }
  return storybook({
    mode: 'dev',
    configDir: path.resolve(__dirname, '../.storybook'),
    staticDir: [`${process.cwd()}/${staticDir}`],
  }).catch((err: Error) => {
    logger.error(err);
    logger.error("Couldn't run storybook");
  });
};
