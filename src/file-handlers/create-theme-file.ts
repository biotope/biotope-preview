import * as fs from 'fs';
import { ThemeConfiguration } from '../interfaces/theme-configuration';
import { FALLBACK_THEME } from '../constants/fallback-theme';
import { logger } from '../logger';

import path = require('path');

export const createThemeFile = (
  themeConfig: ThemeConfiguration,
): Promise<void> => new Promise((resolve, reject) => {
  logger.info('Creating theme file...');
  fs.writeFile(
    `${path.resolve(__dirname, '../../.storybook')}/theme.js`,
    `
      import { create } from '@storybook/theming/create';

      export default create(${
  JSON.stringify({ ...FALLBACK_THEME, ...themeConfig })
});
      `,
    (err: Error) => {
      if (err) reject();
      resolve();
    },
  );
});
