import { logger } from './logger';

export const serve=async () => {
  const { compileTsConfigs } = require("./tasks/compile-ts-configs");
  const { servePreview } = require("./tasks/serve-preview");
  try {
    await compileTsConfigs();
    await servePreview();
  } catch (err) {
    logger.error(err);
  }
};
