import * as fs from 'fs';
import { ExtendedComponentConfiguration } from '../interfaces/component-configuration';

import path = require('path');

export const createDocsFile = (
  config: ExtendedComponentConfiguration,
): void => {
  if (config.docs) {
    fs.writeFileSync(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.docs);
  }
};
