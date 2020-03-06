#!/usr/bin/env node
const gulp1 = require('gulp');
const { compileTsConfigs1, serve } = require('./gulp');

gulp1.series(compileTsConfigs1, serve);