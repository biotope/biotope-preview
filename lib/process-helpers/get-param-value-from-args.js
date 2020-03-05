"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamValueFromArgs = (args, param) => {
    const paramPair = args.filter(arg => arg.indexOf(param) !== -1)[0];
    return paramPair ? paramPair.split('=')[1] : undefined;
};
//# sourceMappingURL=get-param-value-from-args.js.map