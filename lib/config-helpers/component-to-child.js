"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentToChild = (componentConfig, configKey) => {
    return Object.assign(Object.assign({ htmlTagName: componentConfig.htmlTagName }, (componentConfig.resources && { resources: componentConfig.resources })), componentConfig.configurations[configKey]);
};
//# sourceMappingURL=component-to-child.js.map