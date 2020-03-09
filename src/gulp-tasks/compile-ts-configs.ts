const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    return src(`${projectBasePath}/src/components/**/preview/*.ts`)
        .pipe(debug())
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}