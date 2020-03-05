"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderSelectKnob = (config) => {
    const { name, defaultValue, groupId, options } = config;
    return `\"\${select('${name}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(options)}, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-select-knob.js.map