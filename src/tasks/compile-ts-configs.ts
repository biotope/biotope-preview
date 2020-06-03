const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const regex = new RegExp(".*/preview/index.ts$");
import { getGlobalConfig } from "./get-global-config";
const transpileFile = (data: string) => {
  return ts.transpileModule(data, {}).outputText;
};
export async function compileTsConfigs() {
  console.log("Compiling preview configurations...");
  const globalConfig = getGlobalConfig();
  const allComponentsFiles = await recursive(
    `${projectBasePath}/${globalConfig.componentsSrcDir}/`
  );
  const tsFilesPaths = allComponentsFiles.filter((path: string) =>
    regex.test(path)
  );
  const transpiledFiles = tsFilesPaths.map((path: string) => {
    fs.readFile((err: string, data: string) => {
      if (err) {
        throw err;
      }
      return transpileFile(data);
    });
  });
  return new Promise((resolve, reject) => {
    transpiledFiles.map((transpiledFile: string) => {
      console.log(transpileFile);
      fs.writeFile(
        path.resolve(`${__dirname}/../../configurations/index.js`),
        transpiledFile,
        (err: string) => {
          if (err) reject();
        }
      );
    });
    resolve();
  });
}
