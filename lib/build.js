"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = () => {
    const gulp = require('gulp');
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { buildPreview } = require('./gulp-tasks/build-preview');
    gulp.series(compileTsConfigs, buildPreview)();
};
//# sourceMappingURL=build.js.map