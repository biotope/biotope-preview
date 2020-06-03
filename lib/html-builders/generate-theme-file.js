"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const fallbackTheme = {
    base: 'light',
    colorPrimary: '#607DBE',
    colorSecondary: '#F07D61',
    brandTitle: '@biotope/preview',
    brandUrl: 'https://biotope.sh/',
    brandImage: 'https://biotope.sh/_assets/biotope-logo.svg',
};
exports.generateThemeFile = (themeConfig) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, `
      import { create } from '@storybook/theming/create';

      export default create(${JSON.stringify(Object.assign(Object.assign({}, fallbackTheme), themeConfig))});
      `, (err) => {
            if (err)
                reject();
            resolve();
        });
    });
};
//# sourceMappingURL=generate-theme-file.js.map