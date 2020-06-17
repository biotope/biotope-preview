import * as fs from 'fs';
import { ComponentConfiguration } from '../interfaces/component-configuration';

import path = require('path');

export const createDocsFile = (
  config: ComponentConfiguration,
): void => {
  if (config.docs) {
    fs.writeFileSync(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.docs);
  }
};
