"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTsConfigs = void 0;
// const ts = require("typescript");
// const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const get_global_config_1 = require("./get-global-config");
// const transpileFile = (data: string) => {
//   return ts.transpileModule(data, {}).outputText;
// };
async function compileTsConfigs() {
    console.log("Compiling preview configurations...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    const tsFilesPaths = await recursive(`${projectBasePath}/${globalConfig.componentsSrcDir}/../preview/index.ts`);
    console.log(tsFilesPaths);
    //   fs.readfile(
    //     (err: string, data: string) => {
    //       if (err) {
    //         throw err;
    //       }
    //       const transpiledFile = transpileFile(data);
    //       fs.writeFile(path.resolve(`${__dirname}/../../configurations`), transpiledFile);
    //     }
    //   );
    // return src(`${projectBasePath}/${globalConfig.componentsSrcDir}/**/preview/*.ts`)
    //     .pipe(debug())
    //     .pipe(ts())
    //     .pipe(dest(path.resolve(`${__dirname}/../../configurations`)));
}
exports.compileTsConfigs = compileTsConfigs;
//# sourceMappingURL=compile-ts-configs.js.map