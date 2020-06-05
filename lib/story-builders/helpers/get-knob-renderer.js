"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKnobRenderer = void 0;
const render_string_knob_1 = require("../knob-renderers/render-string-knob");
const render_number_knob_1 = require("../knob-renderers/render-number-knob");
const render_boolean_knob_1 = require("../knob-renderers/render-boolean-knob");
const render_array_knob_1 = require("../knob-renderers/render-array-knob");
const render_object_knob_1 = require("../knob-renderers/render-object-knob");
const render_files_knob_1 = require("../knob-renderers/render-files-knob");
const render_select_knob_1 = require("../knob-renderers/render-select-knob");
const render_radio_buttons_knob_1 = require("../knob-renderers/render-radio-buttons-knob");
exports.getKnobRenderer = (type) => {
    switch (type) {
        case 'text': return render_string_knob_1.renderStringKnob;
        case 'color': return render_string_knob_1.renderStringKnob;
        case 'number': return render_number_knob_1.renderNumberKnob;
        case 'boolean': return render_boolean_knob_1.renderBooleanKnob;
        case 'object': return render_object_knob_1.renderObjectKnob;
        case 'array': return render_array_knob_1.renderArrayKnob;
        case 'select': return render_select_knob_1.renderSelectKnob;
        case 'radioButtons': return render_radio_buttons_knob_1.renderRadioButtonsKnob;
        case 'files': return render_files_knob_1.renderFilesKnob;
        default: return render_string_knob_1.renderStringKnob;
    }
};
//# sourceMappingURL=get-knob-renderer.js.map