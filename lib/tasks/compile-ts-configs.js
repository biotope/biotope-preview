"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTsConfigs = void 0;
const ts = require("typescript");
const fs = require("fs-extra");
const recursive = require("recursive-readdir");
const regex = new RegExp(/.*\/(?<component>.*)\/preview\/(?<filename>.*)\.ts$/);
const get_global_config_1 = require("./get-global-config");
const transpile = (tsSourceCode) => {
    return ts.transpileModule(tsSourceCode, {}).outputText;
};
const transpileFile = (path) => {
    return transpile(fs.readFileSync(path, "utf8"));
};
async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    const allComponentsFiles = await recursive(`${process.cwd()}/${globalConfig.componentsSrcDir}/`);
    const tsFilesPaths = allComponentsFiles.filter((path) => regex.test(path));
    const transpiledFiles = tsFilesPaths.map(transpileFile);
    return new Promise((resolve, reject) => {
        transpiledFiles.forEach((transpiledCode, index) => {
            const { component, filename } = tsFilesPaths[index].match(regex).groups;
            const foldername = `${__dirname}/../../configurations/${component}`;
            fs.ensureDirSync(foldername);
            fs.outputFileSync(`${foldername}/${filename}.js`, transpiledCode);
        });
        resolve();
    });
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map