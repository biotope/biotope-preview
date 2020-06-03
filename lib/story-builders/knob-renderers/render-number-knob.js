"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNumberKnob = void 0;
const escape_object_for_template_literals_1 = require("../helpers/escape-object-for-template-literals");
exports.renderNumberKnob = (config) => {
    const { label, defaultValue, groupId, options } = config;
    return `\"\${number('${label}', ${defaultValue}${options ? `, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(options)}` : ', {}'}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-number-knob.js.map