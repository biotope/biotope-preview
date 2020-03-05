"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderArrayKnob = (config) => {
    const { name, defaultValue, groupId } = config;
    return `\"\${array('${name}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, ',', '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-array-knob.js.map