#!/usr/bin/env node
(async () => {
  const { compileTsConfigs } = require("./gulp-tasks/compile-ts-configs");
  const { servePreview } = require("./gulp-tasks/serve-preview");
  try {
    await compileTsConfigs();
    await servePreview();
  } catch (err) {
    console.log("Ooops...something went wrong!");
  }
})();
