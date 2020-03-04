"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBooleanKnob = (config) => {
    const { name, defaultValue, groupId } = config;
    return `\"\${boolean('${name}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-boolean-knob.js.map