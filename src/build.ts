#!/usr/bin/env node
(() => {
    const gulp = require('gulp');
    const { compileTsConfigs, buildPreview } = require('./gulp');

    gulp.series(compileTsConfigs, buildPreview);
})();