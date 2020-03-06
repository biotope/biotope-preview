#!/usr/bin/env node
(() => {
    const gulp = require('gulp');
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { buildPreview } = require('./gulp-tasks/build-preview');
    gulp.series(compileTsConfigs, buildPreview);
})();
//# sourceMappingURL=build.js.map