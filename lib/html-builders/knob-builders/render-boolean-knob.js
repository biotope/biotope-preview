"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBooleanKnob = (config) => {
    const { label, defaultValue, groupId } = config;
    return `\"\${boolean('${label}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-boolean-knob.js.map