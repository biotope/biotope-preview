
const fs = require('fs');
const path = require('path');

export const generateThemeFile = (themefile: any) => {
  fs.writeFileSync(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, `
  import { create } from '@storybook/theming/create';

  export default create(${
    JSON.stringify(themefile.theme)
  });
  `);
}