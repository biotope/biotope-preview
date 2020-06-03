const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');
const path = require('path');
import { getGlobalConfig } from "./get-global-config";

export async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = await getGlobalConfig();
    return src(`${process.cwd()}/${globalConfig.componentsSrcDir}/**/preview/*.ts`)
        .pipe(debug())
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}