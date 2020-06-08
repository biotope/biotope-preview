import { createStoriesFileForConfig } from "./file-handlers/create-stories-file";
import { createDocsFileForConfig } from "./file-handlers/create-docs-file";
import { IComponentConfiguration } from "./interfaces/i-component-configuration";
import * as fs from "fs-extra";
const recursive = require("recursive-readdir");

export const runCreationOfStoriesFiles = async (globalResources: string[]) => {
  try {
    const recursiveFilePaths = await recursive(
      `${__dirname}/../configurations`
    );
    const configurationsPaths = recursiveFilePaths.filter(
      (path: string) => path.indexOf("index.js") !== -1
    );
    const importedConfigurations = configurationsPaths.map(
      (filePath: string) => require(filePath).default
    );
    fs.ensureDirSync(`${__dirname}/../stories/`);
    fs.emptyDirSync(`${__dirname}/../stories/`);
    await Promise.all(
      importedConfigurations.map((config: IComponentConfiguration) =>
        createStoriesFileForConfig(config, globalResources).catch((err) =>
          console.log(err)
        )
      )
    );
    await Promise.all(
      importedConfigurations.map((config: IComponentConfiguration) =>
        createDocsFileForConfig(config).catch((err) => console.log(err))
      )
    );
  } catch (err) {
    console.log("Couldn't create story files for preview", err);
  }
};
