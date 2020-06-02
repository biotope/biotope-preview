export const build = async () => {
  const { compileTsConfigs } = require("./gulp-tasks/compile-ts-configs");
  const { buildPreview } = require("./gulp-tasks/build-preview");
  try {
    await compileTsConfigs();
    await buildPreview();
  } catch (err) {
    console.log("Ooops...something went wrong!");
  }
};
