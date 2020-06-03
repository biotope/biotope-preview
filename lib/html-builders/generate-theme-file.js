"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.generateThemeFile = (themefile) => {
    fs.writeFileSync(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, `
  import { create } from '@storybook/theming/create';

  export default create(${JSON.stringify(themefile.theme)});
  `);
};
//# sourceMappingURL=generate-theme-file.js.map