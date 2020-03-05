"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStringKnob = (config, textType = 'text') => {
    const { name, defaultValue, groupId } = config;
    return `\"\${${textType}('${name}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-string-knob.js.map