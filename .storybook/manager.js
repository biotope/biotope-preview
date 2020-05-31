import { addons } from '@storybook/addons';
import biotopeTheme from './biotope-theme';

const path = require('path');

console.log("base path" + projectBasePath);
console.log("preview config" + previewConfig);

const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
const previewConfig = require(`${projectBasePath}/preview-config.js`);

addons.setConfig({
  theme: previewConfig.theme || biotopeTheme,
});