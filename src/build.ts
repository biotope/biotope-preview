import { compileTsConfigs } from './tasks/compile-ts-configs';
import { buildPreview } from './tasks/build-preview';

export const build = async (): Promise<void> => {
  try {
    await compileTsConfigs();
    await buildPreview();
  } catch (err) {
    console.log('Ooops...something went wrong in the preview!', err);
  }
};
