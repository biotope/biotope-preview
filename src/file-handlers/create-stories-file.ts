import * as fs from 'fs';
import { ComponentConfiguration } from '../interfaces/component-configuration';
import { generateComponentString } from '../story-builders/generate-component-string';

import path = require('path');

export const createStoriesFile = (
  config: ComponentConfiguration,
): void => fs.writeFileSync(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generateComponentString(config));
