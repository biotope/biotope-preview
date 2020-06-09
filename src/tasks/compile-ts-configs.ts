import * as fs from 'fs-extra';
import ts from 'typescript';
import globby from 'globby';
import { getGlobalConfig } from './get-global-config';

const regex = new RegExp(/.*\/(?<component>.*)\/preview\/(?<filename>.*)\.ts$/);

const transpile = (tsSourceCode: string): string => ts.transpileModule(tsSourceCode, {}).outputText;
const transpileFile = (path: string): string => transpile(fs.readFileSync(path, 'utf8'));

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

  return new Promise((resolve) => {
    transpiledFiles.forEach((transpiledCode: string, index: number) => {
      const groups = tsFilesPaths[index]?.match(regex)?.groups;
      if (groups) {
        const { component, filename } = groups;
        const foldername = `${componentsConfigFolder}/${component}`;
        fs.ensureDirSync(foldername);
        fs.emptyDirSync(foldername);
        fs.outputFileSync(`${foldername}/${filename}.js`, transpiledCode);
      }
    });
    resolve();
  }).catch((err) => console.log("Couldn't compile preview configurations", err));
}
