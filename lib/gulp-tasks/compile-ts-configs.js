"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTsConfigs = void 0;
const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');
const path = require('path');
const get_global_config_1 = require("./get-global-config");
async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = await get_global_config_1.getGlobalConfig();
    return src(`${process.cwd()}/${globalConfig.componentsSrcDir}/**/preview/*.ts`)
        .pipe(debug())
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map