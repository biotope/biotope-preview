"use strict";
exports.__esModule = true;
var regular_1 = require("./regular");
var config = {
    title: 'Such a nice banner',
    htmlTagName: 'a-nice-banner',
    resources: ['components/a-nice-banner/a-nice-banner.ts'],
    configurations: {
        regular: regular_1.regular
    },
    templates: {
        nice: {
            containingHTML: '<h1>This is a template!</h1><article>#content</article>'
        }
    }
};
exports["default"] = config;
