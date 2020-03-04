"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNumberKnob = (config) => {
    const { name, defaultValue, groupId, options } = config;
    return `\"\${number('${name}', ${defaultValue}${options ? `, ${JSON.stringify(options)}` : ', {}'}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-number-knob.js.map