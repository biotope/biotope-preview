#!/usr/bin/env node
import { runCreationOfStoriesFiles } from "./run-creation-of-stories-files";
import { runStorybook } from "./run-storybook";
import { getParamValueFromArgs } from "./process-helpers/get-param-value-from-args";

(async () => {
    const userConfig = process.argv;
    const componentsSrcDir = getParamValueFromArgs(userConfig, "componentsSrcDir") || 'src/components';
    const staticDir = getParamValueFromArgs(userConfig, "staticDir") || 'dist/resources/components';
    await runCreationOfStoriesFiles(componentsSrcDir);
    await runStorybook({staticDir});
})().catch(e => {
    console.error(`Generation of biotope preview failed: ${e}`);
    process.exit(e);
});