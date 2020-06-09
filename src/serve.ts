#!/usr/bin/env node
import { compileTsConfigs } from './tasks/compile-ts-configs';
import { servePreview } from './tasks/serve-preview';
import { logger } from './logger';

(async (): Promise<void> => {
  try {
    await compileTsConfigs();
    await servePreview();
  } catch (err) {
    logger.error(err);
  }
})();
