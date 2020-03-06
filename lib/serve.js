#!/usr/bin/env node
(() => {
    const gulp = require('gulp');
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { servePreview } = require('./gulp-tasks/serve-preview');
    gulp.series(compileTsConfigs, servePreview);
})();
//# sourceMappingURL=serve.js.map