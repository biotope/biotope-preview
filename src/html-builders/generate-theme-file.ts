
const fs = require('fs');
const path = require('path');

const fallbackTheme = {
  base: 'light',

  colorPrimary: '#607DBE',
  colorSecondary: '#F07D61',

  brandTitle: '@biotope/preview',
  brandUrl: 'https://biotope.sh/',
  brandImage: 'https://biotope.sh/_assets/biotope-logo.svg',
}

export const generateThemeFile = (themefile: any) => {
  fs.writeFileSync(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, `
  import { create } from '@storybook/theming/create';

  export default create(${
    JSON.stringify({...fallbackTheme, ...themefile.theme})
  });
  `);
}