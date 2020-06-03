"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderArrayKnob = void 0;
const escape_object_for_template_literals_1 = require("../helpers/escape-object-for-template-literals");
exports.renderArrayKnob = (config) => {
    const { label, defaultValue, groupId } = config;
    return `\"\${array('${label}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, ',', '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-array-knob.js.map