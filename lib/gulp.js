"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const { build } = require('./build');
const { serve } = require('./serve');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
function compileTsConfigs() {
    return src(`${projectBasePath}/src/components/**/preview/index.ts`)
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../configurations`)));
}
exports.compileTsConfigs = compileTsConfigs;
function buildPreview() {
    build();
}
exports.buildPreview = buildPreview;
function servePreview() {
    serve();
}
exports.servePreview = servePreview;
//# sourceMappingURL=gulp.js.map