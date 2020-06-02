// import {writeFileSync} from "fs";
const fs = require('fs');

export const generateThemeFile = (themefile: any) => {
  fs.writeFileSync("../../.storybook/theme.js", themefile.theme);
}