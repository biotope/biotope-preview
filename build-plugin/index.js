const { build } = require("../lib");

const biotopePreviewPlugin = (pluginConfig = {}) => ({
  name: 'biotope-build-preview-plugin',
  hook: 'before-emit',
  priority: 5,
  runner() {
    build()
  },
});

module.exports = biotopePreviewPlugin;
