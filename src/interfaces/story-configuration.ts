import { PropConfiguration, TypedPropConfiguration } from './prop-configuration';
import { HtmlElementConfiguration } from './html-element-configuration';

export interface StoryConfiguration {
  props?: PropConfiguration[];
  children?: HtmlElementConfiguration[];
  innerHtml?: string;
  containingHtml?: string;
  innerHtmlAsKnob?: boolean;
}

export interface TypedStoryConfiguration<T> {
  props?: TypedPropConfiguration<T>[];
  children?: HtmlElementConfiguration[];
  innerHtml?: string;
  containingHtml?: string;
  innerHtmlAsKnob?: boolean;
}
