"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderObjectKnob = void 0;
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderObjectKnob = (config) => {
    const { label, defaultValue, groupId } = config;
    return `'\${JSON.stringify(object('${label}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})).replace(/"/g, '\"').replace(/'/g, '\"')}'`;
};
//# sourceMappingURL=render-object-knob.js.map