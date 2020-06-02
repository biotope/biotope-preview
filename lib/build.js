"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
exports.build = () => {
    const { compileTsConfigs } = require("./gulp-tasks/compile-ts-configs");
    const { buildPreview } = require("./gulp-tasks/build-preview");
    compileTsConfigs();
    buildPreview();
};
//# sourceMappingURL=build.js.map