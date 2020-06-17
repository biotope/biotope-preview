const { buildPreview, servePreview } = require('../lib');

const biotopePreviewPlugin = (config) => ({
  name: 'biotope-build-preview-plugin',
  hook: 'before-emit',
  priority: 7,
  runner() {
    if (config.serve) {
      servePreview(config ? config.configFilePath : undefined);
    } else {
      buildPreview(config ? config.configFilePath : undefined);
    }
  },
});

module.exports = biotopePreviewPlugin;
