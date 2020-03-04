#!/usr/bin/env node
import { runCreationOfStoriesFiles } from "./run-creation-of-stories-files";
import { runStorybook } from "./run-storybook";

(async () => {
    await runCreationOfStoriesFiles();
    await runStorybook('dev');
})().catch(e => process.exit(e));