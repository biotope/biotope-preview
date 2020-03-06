#!/usr/bin/env node
(() => {
    const gulp = require('gulp');
    const { compileTsConfigs, servePreview } = require('./gulp');
    gulp.series(compileTsConfigs, servePreview);
})();
//# sourceMappingURL=serve.js.map