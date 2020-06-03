"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemeFile = void 0;
const fallback_theme_1 = require("../constants/fallback-theme");
const fs = require('fs');
const path = require('path');
exports.createThemeFile = (themeConfig) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, `
      import { create } from '@storybook/theming/create';

      export default create(${JSON.stringify(Object.assign(Object.assign({}, fallback_theme_1.FALLBACK_THEME), themeConfig))});
      `, (err) => {
            if (err)
                reject();
            resolve();
        });
    });
};
//# sourceMappingURL=create-theme-file.js.map