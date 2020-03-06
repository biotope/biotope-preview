const { series, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const build = require('./lib/build');
const serve = require('./lib/serve');
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

function buildPreview() {
    build();
}

function servePreview() {
    serve();
}

exports.build = series(compileTsConfigs, buildPreview)
exports.serve = series(compileTsConfigs, servePreview)