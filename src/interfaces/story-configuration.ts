import { PropConfiguration } from './prop-configuration';
import { HtmlElementConfiguration } from './html-element-configuration';

export interface StoryConfiguration {
  props?: PropConfiguration[];
  children?: HtmlElementConfiguration[];
  innerHtml?: string;
  containingHtml?: string;
  innerHtmlAsKnob?: boolean;
}
