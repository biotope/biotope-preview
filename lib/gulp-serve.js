#!/usr/bin/env node
const gulp1 = require('gulp');
const { compileTsConfigs1, servePreview } = require('./gulp');
gulp1.series(compileTsConfigs1, servePreview)();
//# sourceMappingURL=gulp-serve.js.map