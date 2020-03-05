#!/usr/bin/env node
import { runCreationOfStoriesFiles } from "./run-creation-of-stories-files";
import { runStorybook } from "./run-storybook";
import { getParamValueFromArgs } from "./process-helpers/get-param-value-from-args";

(async () => {
    const userConfig = process.argv;
    const componentsSrcDir = getParamValueFromArgs(userConfig, "componentsSrc");
    const staticDir = getParamValueFromArgs(userConfig, "staticDir");
    await runCreationOfStoriesFiles(componentsSrcDir);
    await runStorybook({staticDir, mode: 'dev'});
})().catch(e => process.exit(e));