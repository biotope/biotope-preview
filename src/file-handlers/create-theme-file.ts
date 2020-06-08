import { ThemeConfiguration } from '../interfaces/theme-configuration';
import { FALLBACK_THEME } from '../constants/fallback-theme';

const fs = require('fs');
const path = require('path');

export const createThemeFile = (
  themeConfig: ThemeConfiguration,
): Promise<void> => new Promise((resolve, reject) => {
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
