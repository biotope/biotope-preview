const ts = require("typescript");
import * as fs from "fs-extra";
const path = require("path");
const recursive = require("recursive-readdir");
const projectBasePath = path.resolve(__dirname).split("/node_modules")[0];
const regex = new RegExp(/.*\/(?<component>.*)\/preview\/(?<filename>.*)\.ts$/);
import { getGlobalConfig } from "./get-global-config";

const transpile = (tsSourceCode: string) => {
  return ts.transpileModule(tsSourceCode, {}).outputText;
};
const transpileFile = (path: string) => {
  return transpile(fs.readFileSync(path, "utf8"));
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
  const transpiledFiles = tsFilesPaths.map(transpileFile);

  return new Promise((resolve, reject) => {
    transpiledFiles.forEach((transpiledCode: string, index: number) => {
      const { component, filename } = tsFilesPaths[index].match(regex).groups;
      const foldername = `${__dirname}/../../configurations/${component}`;
      fs.ensureDirSync(foldername);
      fs.outputFileSync(`${foldername}/${filename}.js`, transpiledCode);
    });
    resolve();
  });
}