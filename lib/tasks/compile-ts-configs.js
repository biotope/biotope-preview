"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTsConfigs = void 0;
const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const regex = new RegExp("(.*)/preview/index.ts$");
const get_global_config_1 = require("./get-global-config");
const transpile = (data) => {
    return ts.transpileModule(data, {}).outputText;
};
const transpileFiles = (path) => {
    return transpile(fs.readFileSync(path));
};
async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    const allComponentsFiles = await recursive(`${projectBasePath}/${globalConfig.componentsSrcDir}/`);
    const tsFilesPaths = allComponentsFiles.filter((path) => regex.test(path));
    const transpiledFiles = tsFilesPaths.map((path) => {
        transpileFiles(path);
    });
    console.log(tsFilesPaths.forEach((path) => console.log(path.match(regex))));
    return new Promise((resolve, reject) => {
        transpiledFiles.forEach((transpiledFile) => {
            fs.writeFileSync(path.resolve(`${__dirname}/../../configurations/index.js`), transpiledFile);
        });
        resolve();
    });
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map