export const polyfillBrowserVariables = (): void => {
  const Window = require('window');
  global.window = new Window();
  global.document = global.window.document;
  global.HTMLElement = global.window.HTMLElement;
  global.HTMLUnknownElement = global.window.HTMLUnknownElement;
  global.customElements = ({
    define: () => { },
  } as any);
};
