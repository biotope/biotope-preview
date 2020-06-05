"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStringKnob = void 0;
exports.renderStringKnob = (config, textType = 'text') => {
    const { label, defaultValue, groupId } = config;
    return `\"\${${textType}('${label}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-string-knob.js.map