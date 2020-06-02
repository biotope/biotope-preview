// import {writeFileSync} from "fs";
const fs = require('fs');
const path = require('path');

export const generateThemeFile = (themefile: any) => {
  fs.writeFileSync(`${path.resolve(__dirname, '../.storybook')}/theme.js`, themefile.theme);
}