"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.generateThemeFile = (themefile) => {
    fs.writeFileSync(`${path.resolve(__dirname, '../../.storybook')}/theme.js`, themefile.theme.join(','), 'utf-8');
};
//# sourceMappingURL=generate-theme-file.js.map