import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";
import { getGlobalConfig } from "./get-global-config";

export async function buildPreview() {
    console.log("Building the preview...");
    const globalConfig = getGlobalConfig();
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await runStorybook({ mode: 'static', staticDir: globalConfig.resourcesDir });
}