import { HtmlElementConfiguration } from '../interfaces/html-element-configuration';
import { convertValueToAttribute } from './helpers/convert-value-to-attribute';
import { getKnobRenderer } from './helpers/get-knob-renderer';

export const generateHtmlTag = (config: HtmlElementConfiguration): string => {
  const tagName = config.htmlTagName;
  const props = config.props || [];
  const propsString = props
    .map((prop) => {
      const { knob, value, name } = prop;
      if (knob) {
        const renderKnob = getKnobRenderer(knob.type);
        return ` ${name}=${renderKnob({
          ...knob,
          defaultValue: value,
        } as any)}`;
      }
      return ` ${name}=${convertValueToAttribute(value)}`;
    })
    .join('');
  let children;
  if (config.children) {
    children = config.children.map((child) => generateHtmlTag(child)).join('');
  }
  if (config.innerHtml) {
    children = config.innerHtmlAsKnob
      ? getKnobRenderer('text')({
        defaultValue: config.innerHtml || 'Lorem ipsum',
        label: 'inner HTML',
      } as any).substring(1).slice(0, -1)
      : config.innerHtml;
  }
  const resources = config.resources && config.resources.length > 0
    ? ` data-resources="[{paths : [${config.resources.map(
      (r) => `'${r}'`,
    )}]}]"`
    : '';
  const htmlBefore = config.containingHtml
    ? config.containingHtml.split('#content')[0]
    : '';
  const htmlAfter = config.containingHtml
    ? config.containingHtml.split('#content')[1]
    : '';
  return `${htmlBefore}<${tagName}${resources}${propsString}>${
    children || ''
  }</${tagName}>${htmlAfter}`;
};
