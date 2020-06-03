"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTsConfigs = void 0;
const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const regex = new RegExp(".*/preview/index.ts$");
const get_global_config_1 = require("./get-global-config");
const transpileFile = (data) => {
    return ts.transpileModule(data, {}).outputText;
};
async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    const allComponentsFiles = await recursive(`${projectBasePath}/${globalConfig.componentsSrcDir}/`);
    const tsFilesPaths = allComponentsFiles.filter((path) => regex.test(path));
    const transpiledFiles = tsFilesPaths.map((path) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                throw err;
            }
            return transpileFile(data);
        });
    });
    return new Promise((resolve, reject) => {
        transpiledFiles.map((transpiledFile) => {
            console.log(transpileFile);
            fs.writeFile(path.resolve(`${__dirname}/../../configurations/index.js`), transpiledFile, (err) => {
                if (err)
                    reject();
            });
        });
        resolve();
    });
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map