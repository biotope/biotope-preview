import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";
import { getGlobalConfig } from "./get-global-config";
import { generateThemeFile } from "../html-builders/generate-theme-file"

export async function buildPreview() {
    console.log("Building the preview...");
    const globalConfig = getGlobalConfig();
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await generateThemeFile(globalConfig);
    // console.log(generateThemeFile(globalConfig));
    await runStorybook({ mode: 'static', staticDir: globalConfig.resourcesDir });
}