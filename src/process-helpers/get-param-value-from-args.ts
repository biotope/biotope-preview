export const getParamValueFromArgs = (args: string[], param: string) => {
    const paramPair = args.filter(arg => arg.indexOf(param) !== -1)[0];
    return paramPair ? paramPair.split('=')[1] : undefined;
}