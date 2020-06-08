#!/usr/bin/env node
(async () => {
  const { compileTsConfigs } = require("./tasks/compile-ts-configs");
  const { servePreview } = require("./tasks/serve-preview");
  try {
    await compileTsConfigs();
    await servePreview();
  } catch (err) {
    console.log("Ooops...something went wrong in the preview!", err);
  }
})();
