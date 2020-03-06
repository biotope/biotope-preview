#!/usr/bin/env node
const gulp = require('gulp');
const { compileTsConfigs, build } = require('./gulp');

gulp.series(compileTsConfigs, build);