import { IThemeConfiguration } from "../interfaces/i-theme-configuration";
import { FALLBACK_THEME } from "../constants/fallback-theme";

const fs = require('fs');
const path = require('path');

export const createThemeFile = (themeConfig: IThemeConfiguration) => {
  return new Promise((resolve, reject) => {
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
      });
  })
}