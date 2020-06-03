import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";
import { getGlobalConfig } from "./get-global-config";

export async function servePreview() {
    console.log("Serving the preview...");
    const globalConfig = getGlobalConfig();
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await runStorybook({ mode: 'dev', staticDir: globalConfig.resourcesDir, outputDir: globalConfig.outputDir });
}