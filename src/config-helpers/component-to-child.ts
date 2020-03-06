import { IComponentConfiguration } from "../interfaces/i-component-configuration"
import { IHtmlElementConfiguration } from "../interfaces/i-html-element-configuration"

export const componentToChild = (componentConfig: IComponentConfiguration, configKey: string): IHtmlElementConfiguration => {
    return {
        htmlTagName: componentConfig.htmlTagName,
        ...(componentConfig.resources && {resources: componentConfig.resources}),
        ...componentConfig.configurations[configKey],
    }
}