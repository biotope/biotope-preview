#!/usr/bin/env node
import { build } from "../build";
import { serve } from "../serve";

const { program } = require("commander");

program
  .option("-s, --serve", "serve")
  .option("-c, --config", "custom config");

program.parse(process.argv);

if (program.serve) {
  serve();
} else {
  build();
}
