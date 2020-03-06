"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const { build } = require('./build');
const { serve } = require('./serve');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
function compileTsConfigs() {
    var index = 0;
    return src(`${projectBasePath}/src/components/**/preview/index.ts`)
        .pipe(ts({
        outFile: "config.js"
    }))
        .pipe(rename((path) => {
        path.basename += ("-" + index++);
    }))
        .pipe(dest('configs'));
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