import * as fs from 'fs';
import { ComponentConfiguration } from '../interfaces/component-configuration';
import { generateComponentString } from '../story-builders/generate-component-string';

import path = require('path');

export const createStoriesFileForConfig = (
  config: ComponentConfiguration,
): Promise<void> => new Promise((resolve, reject) => {
  fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generateComponentString(config), (err) => {
    if (err) reject();
    resolve();
  });
});
