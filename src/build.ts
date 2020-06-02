export const build = async () => {
    const { compileTsConfigs } = require('./gulp-tasks/compile-ts-configs');
    const { buildPreview } = require('./gulp-tasks/build-preview');
    await compileTsConfigs();
    await buildPreview();
}