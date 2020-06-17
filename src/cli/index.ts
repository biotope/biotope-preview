#!/usr/bin/env node
import { buildPreview, servePreview } from '../index';

const { program } = require('commander');

program
  .option('-s, --serve', 'serve')
  .option('-c, --config <path>', 'custom config');

program.parse(process.argv);

if (program.serve) {
  servePreview(program.config);
} else {
  buildPreview(program.config);
}
