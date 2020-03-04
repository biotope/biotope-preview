"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderObjectKnob = (config) => {
    const { name, defaultValue, groupId } = config;
    return `\"\${object('${name}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-object-knob.js.map