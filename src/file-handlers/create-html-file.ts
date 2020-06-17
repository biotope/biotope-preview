import * as fs from 'fs';
import { generateHtmlTag } from '../story-builders/generate-html-tag';
import { HtmlElementConfiguration } from '../interfaces/html-element-configuration';

export const createHtmlFile = (
  configs: HtmlElementConfiguration[],
): void => fs.writeFileSync(`${process.cwd()}/html/${configs[0].htmlTagName}.html`, configs.map((c) => generateHtmlTag(c, false)).join(''));
