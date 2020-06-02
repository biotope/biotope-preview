"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {writeFileSync} from "fs";
const fs = require('fs');
exports.generateThemeFile = (themefile) => {
    fs.writeFileSync("../../.storybook/theme.js", themefile.theme);
};
//# sourceMappingURL=generate-theme-file.js.map