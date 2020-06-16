#!/usr/bin/env node
import { createPreview } from '../index';

const { program } = require('commander');

program
  .option('-s, --serve', 'serve')
  .option('-c, --config <path>', 'custom config');

program.parse(process.argv);

createPreview(program.serve, program.config);
