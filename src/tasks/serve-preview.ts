import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";
import { getGlobalConfig } from "./get-global-config";
import { createThemeFile } from "../file-handlers/create-theme-file";

export async function servePreview() {
  console.log("Serving the preview...");
  const globalConfig = getGlobalConfig();
  try {
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await createThemeFile(globalConfig.theme);
    await runStorybook({
      mode: "dev",
      staticDir: globalConfig.resourcesDir,
      outputDir: globalConfig.outputDir,
    });
  } catch (err) {
    console.log("Couldn't serve the preview!", err);
  }
}
