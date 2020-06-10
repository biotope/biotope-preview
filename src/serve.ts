import { logger } from './logger';

export const serve=async (configPath: string) => {
  const { compileTsConfigs } = require("./tasks/compile-ts-configs");
  const { servePreview } = require("./tasks/serve-preview");
  try {
    await compileTsConfigs(configPath);
    await servePreview();
  } catch (err) {
    logger.error(err);
  }
};
