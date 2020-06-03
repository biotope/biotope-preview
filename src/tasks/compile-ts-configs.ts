const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const regex = new RegExp("(.*)/preview/index.ts$");
import { getGlobalConfig } from "./get-global-config";

const transpile = (data: string) => {
    return ts.transpileModule(data, {}).outputText;
  };
const transpileFiles = (path: string) => {
  return transpile(fs.readFileSync(path));
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
    transpileFiles(path);
  });
console.log(tsFilesPaths.forEach((path: string) => console.log(path.match(regex))
))
  return new Promise((resolve, reject) => {
    transpiledFiles.forEach((transpiledFile: string) => {
      fs.writeFileSync(
        path.resolve(`${__dirname}/../../configurations/index.js`),
        transpiledFile,);
    });
    resolve();
  });
}
