const { build } = require('../lib');

const biotopePreviewPlugin = (configPath="preview-config.js") => ({
  name: 'biotope-build-preview-plugin',
  hook: 'before-emit',
  priority: 5,
  runner() {
    build(`${process.cwd()}/${configPath}`);
  },
});

module.exports = biotopePreviewPlugin;
