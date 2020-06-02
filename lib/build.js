"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
exports.build = async () => {
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { buildPreview } = require('./gulp-tasks/build-preview');
    await compileTsConfigs();
    await buildPreview();
};
//# sourceMappingURL=build.js.map