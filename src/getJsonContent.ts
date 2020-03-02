import * as fs from 'fs';

export const getJsonContent = (filePath: string): any => {
    const response = fs.readFileSync(filePath, "utf8");
    return JSON.parse(response);
}