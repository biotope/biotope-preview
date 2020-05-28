"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
const get_global_config_1 = require("./get-global-config");
function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    return src(`${projectBasePath}/${globalConfig.componentsSrcDir}/**/preview/*.ts`)
        .pipe(debug())
        .pipe(ts())
        .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map