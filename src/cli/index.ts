#!/usr/bin/env node
import { build } from "../build";
import { serve } from "../serve";

const { program } = require("commander");

program
  .option("-s, --serve", "serve")
  .option("-c, --config <config-path>", "custom config", `/preview-config.js`);

program.parse(process.argv);

if (program.serve) {
  serve(`${process.cwd()}/${program.config}`);
} else {
  build(`${process.cwd()}/${program.config}`);
}
