#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const run_creation_of_stories_files_1 = require("./run-creation-of-stories-files");
const run_storybook_1 = require("./run-storybook");
const get_param_value_from_args_1 = require("./process-helpers/get-param-value-from-args");
(async () => {
    const userConfig = process.argv;
    const componentsSrcDir = get_param_value_from_args_1.getParamValueFromArgs(userConfig, "componentsSrc");
    const staticDir = get_param_value_from_args_1.getParamValueFromArgs(userConfig, "staticDir");
    await run_creation_of_stories_files_1.runCreationOfStoriesFiles(componentsSrcDir);
    await run_storybook_1.runStorybook({ staticDir });
})().catch(e => process.exit(e));
//# sourceMappingURL=build.js.map