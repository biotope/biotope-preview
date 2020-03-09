const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
import { getGlobalConfig } from "./get-global-config";

export function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = getGlobalConfig();
    return src(`${projectBasePath}/${globalConfig.componentsSrcDir}/**/preview/*.ts`)
        .pipe(debug())
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}