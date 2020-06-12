export const createTagStringForResource = (
  resourcePath: string,
): string | undefined => {
  const fileTypeSeparator = /[^\\]*\.(\w+)$/;
  const separated = resourcePath.match(fileTypeSeparator);
  const fileType = separated ? separated[1] : undefined;
  if (fileType === 'js' || fileType === 'mjs') {
    return `<script src="${resourcePath}" type="module" async charset="utf-8"></script>`;
  }
  if (fileType === 'css') {
    return `<link href="${resourcePath}" rel="stylesheet"></link>`;
  }
  return undefined;
};
