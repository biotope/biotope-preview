#!/usr/bin/env node
(async () => {
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { servePreview } = require('./gulp-tasks/serve-preview');
    await compileTsConfigs();
    await servePreview();
})();