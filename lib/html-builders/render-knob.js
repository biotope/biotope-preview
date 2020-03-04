"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const render_string_knob_1 = require("./knob-builders/render-string-knob");
const render_number_knob_1 = require("./knob-builders/render-number-knob");
const render_boolean_knob_1 = require("./knob-builders/render-boolean-knob");
const convert_value_to_attribute_1 = require("./convert-value-to-attribute");
exports.renderKnob = ({ name, type, groupId, options }, defaultValue) => {
    switch (type) {
        case 'text': return render_string_knob_1.renderStringKnob({ name, groupId, defaultValue }, 'text');
        case 'color': return render_string_knob_1.renderStringKnob({ name, groupId, defaultValue }, 'color');
        case 'number': return render_number_knob_1.renderNumberKnob({ name, groupId, defaultValue, options });
        case 'boolean': return render_boolean_knob_1.renderBooleanKnob({ name, groupId, defaultValue });
        default: return convert_value_to_attribute_1.convertValueToAttribute(defaultValue);
    }
};
//# sourceMappingURL=render-knob.js.map