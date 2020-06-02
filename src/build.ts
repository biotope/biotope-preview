export const build = () => {
  const { compileTsConfigs } = require("./gulp-tasks/compile-ts-configs");
  const { buildPreview } = require("./gulp-tasks/build-preview");
  compileTsConfigs();
  buildPreview();
};
