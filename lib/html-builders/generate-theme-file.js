"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {writeFileSync} from "fs";
const fs = require('fs');
const path = require('path');
exports.generateThemeFile = (themefile) => {
    fs.writeFileSync(`${path.resolve(__dirname, '../.storybook')}/theme.js`, themefile.theme);
};
//# sourceMappingURL=generate-theme-file.js.map