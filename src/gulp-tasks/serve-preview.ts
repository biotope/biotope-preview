import { runCreationOfStoriesFiles } from "../run-creation-of-stories-files";
import { runStorybook } from "../run-storybook";

export async function servePreview() {
    console.log("Serving the preview...");

    await runCreationOfStoriesFiles();
    await runStorybook({ mode: 'dev' });
}