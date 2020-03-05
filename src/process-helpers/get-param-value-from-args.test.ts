import { getParamValueFromArgs } from './get-param-value-from-args';

test("returns parameter value from list of args", () => {
    expect(getParamValueFromArgs(["param1=super", "param2=great"], "param2")).toBe('great');
})