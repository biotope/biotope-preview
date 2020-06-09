#!/usr/bin/env node
import { compileTsConfigs } from './tasks/compile-ts-configs';
import { servePreview } from './tasks/serve-preview';

(async (): Promise<void> => {
  try {
    await compileTsConfigs();
    await servePreview();
  } catch (err) {
    console.log('Ooops...something went wrong in the preview!', err);
  }
})();
