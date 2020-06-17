import * as fs from 'fs-extra';
import { logger } from '../logger';
import { GlobalConfiguration } from '../interfaces/global-configuration';

import ts = require('typescript');
import globby = require('globby');

const transpile = (tsSourceCode: string): string => ts.transpileModule(tsSourceCode, {}).outputText;
const transpileFile = (path: string): string => transpile(fs.readFileSync(path, 'utf8'));

export async function compileTsConfigs(globalConfig: GlobalConfiguration): Promise<unknown> {
  logger.info('Compiling preview configurations...');
  const componentsConfigFolder = `${__dirname}/../../configurations`;
  const configFilesPaths = await globby(
    globalConfig.previewConfigPatterns.map(
      (pattern) => `${process.cwd()}/${pattern}`,
    ),
  );
  const transpiledFiles = configFilesPaths.map(transpileFile);

  fs.ensureDirSync(componentsConfigFolder);
  fs.emptyDirSync(componentsConfigFolder);

  return new Promise((resolve) => {
    transpiledFiles.forEach((transpiledCode: string, index: number) => {
      fs.ensureDirSync(componentsConfigFolder);
      fs.outputFileSync(`${componentsConfigFolder}/${index}.js`, transpiledCode);
    });
    resolve();
  }).catch((err) => {
    logger.error(err);
    logger.error("Couldn't compile preview configurations");
  });
}
