import {writeFileSync} from "fs"

export const generateThemeFile = (pathToThemefile: string) => {
  writeFileSync("theme.js", pathToThemefile);
}