import path = require('path');

const storybook = require('@storybook/html/standalone');

export const runStorybook = ({ staticDir = 'dist/resources/components', mode = 'static', outputDir = 'dist' }): Promise<void> => {
  if (mode === 'static') {
    return storybook({
      mode: 'static',
      configDir: path.resolve(__dirname, '../.storybook'),
      staticDir: [`${process.cwd()}/${staticDir}`],
      outputDir: `${process.cwd()}/${outputDir}/preview`,
    }).catch((err: Error) => {
      console.log("Couldn't run storybook", err);
    });
  }
  return storybook({
    mode: 'dev',
    configDir: path.resolve(__dirname, '../.storybook'),
    staticDir: [`${process.cwd()}/${staticDir}`],
  }).catch((err: Error) => {
    console.log("Couldn't run storybook", err);
  });
};
