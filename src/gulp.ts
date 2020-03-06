const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const { build } = require('./build');
const { serve } = require('./serve');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function compileTsConfigs() {
    return src(`${projectBasePath}/src/components/**/preview/index.ts`)
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../configurations`)));
}

export function buildPreview() {
    build();
}

export function servePreview() {
    serve();
}