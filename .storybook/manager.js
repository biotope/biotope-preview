import { addons } from '@storybook/addons';
import biotopeTheme from './biotope-theme';

const path = require('path');


const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
const previewConfig = require(`${projectBasePath}/preview-config.js`);
console.log("base path" + projectBasePath);
console.log("preview config" + previewConfig);

addons.setConfig({
  theme: previewConfig.theme || biotopeTheme,
});