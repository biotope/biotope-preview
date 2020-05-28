"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBooleanKnob = void 0;
exports.renderBooleanKnob = (config) => {
    const { label, defaultValue, groupId } = config;
    return `\"\${boolean('${label}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-boolean-knob.js.map