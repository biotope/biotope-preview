const { build } = require("../lib");

const biotopePreviewPlugin = (pluginConfig = {}) => ({
  name: 'biotope-build-preview-plugin',
  hook: 'after-emit',
  priority: 5,
  runner() {
    build()
  },
});

module.exports = biotopePreviewPlugin;
