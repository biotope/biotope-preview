import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";

export async function buildPreview() {
    console.log("Building the preview...");

    await runCreationOfStoriesFiles();
    await runStorybook({ mode: 'static' });
}