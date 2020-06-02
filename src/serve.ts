#!/usr/bin/env node
(() => {
  const { compileTsConfigs } = require("./gulp-tasks/compile-ts-configs");
  const { servePreview } = require("./gulp-tasks/serve-preview");
  compileTsConfigs();
  servePreview();
})();
