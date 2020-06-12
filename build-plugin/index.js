const { build } = require('../lib');

const biotopePreviewPlugin = (config) => ({
  name: 'biotope-build-preview-plugin',
  hook: 'before-emit',
  priority: 5,
  runner() {
    build(config ? config.configFilePath : undefined);
  },
});

module.exports = biotopePreviewPlugin;
