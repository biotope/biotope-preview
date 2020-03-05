"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamValueFromArgs = (args, param) => args.filter(arg => arg.indexOf(param) !== -1)[0].split('=')[1];
//# sourceMappingURL=get-param-value-from-args.js.map