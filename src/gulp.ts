const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const buildPreview = require('./build');
const servePreview = require('./serve');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function compileTsConfigs() {
    var index = 0;
    return src(`${projectBasePath}/src/components/**/preview/index.ts`)
        .pipe(ts({
            outFile: "config.js"
        }))
        .pipe(rename((path: any) => {
            path.basename += ("-" + index++);
        }))
        .pipe(dest('configs'));
}

export function build() {
    buildPreview();
}

export function serve() {
    servePreview();
}