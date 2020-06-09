const ts = require("typescript");
import * as fs from "fs-extra";
const globby = require("globby");
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
  const componentsConfigFolder = `${__dirname}/../../configurations`;
  const globalConfig = getGlobalConfig();
  const allComponentsFiles = await globby(
    globalConfig.previewConfigPatterns.map(
      pattern => `${process.cwd()}/${pattern}`
    )
  );
  const tsFilesPaths = allComponentsFiles.filter((path: string) =>
    regex.test(path)
  );
  const transpiledFiles = tsFilesPaths.map(transpileFile);

  fs.ensureDirSync(componentsConfigFolder);
  fs.emptyDirSync(componentsConfigFolder);

  return new Promise((resolve, reject) => {
    transpiledFiles.forEach((transpiledCode: string, index: number) => {
      const { component, filename } = tsFilesPaths[index].match(regex).groups;
      const foldername = `${componentsConfigFolder}/${component}`;
      fs.ensureDirSync(foldername);
      fs.emptyDirSync(foldername);
      fs.outputFileSync(`${foldername}/${filename}.js`, transpiledCode);
    });
    resolve();
  }).catch((err) => console.log("Couldn't compile preview configurations", err));
}
