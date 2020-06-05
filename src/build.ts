export const build = async () => {
  const { compileTsConfigs } = require("./tasks/compile-ts-configs");
  const { buildPreview } = require("./tasks/build-preview");
  try {
    await compileTsConfigs();
    await buildPreview();
  } catch (err) {
    console.log("Ooops...something went wrong!"), err;
  }
};
