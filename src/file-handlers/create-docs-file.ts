import * as fs from 'fs';
import { ComponentConfiguration } from '../interfaces/component-configuration';

import path = require('path');

export const createDocsFileForConfig = (
  config: ComponentConfiguration,
): Promise<void> => new Promise((resolve, reject) => {
  if (config.docs) {
    fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.docs, (err) => {
      if (err) reject();
      resolve();
    });
  } else {
    resolve();
  }
});
