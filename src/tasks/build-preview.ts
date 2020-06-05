import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";
import { getGlobalConfig } from "./get-global-config";
import { createThemeFile } from "../file-handlers/create-theme-file";

export async function buildPreview() {
    console.log("Building the preview...");
    const globalConfig = getGlobalConfig();
    try{
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await createThemeFile(globalConfig.theme);
    await runStorybook({ mode: 'static', staticDir: globalConfig.resourcesDir, outputDir: globalConfig.outputDir });
    }
    catch (err) {
    console.log("Couldn't build the preview", err);
    }
}