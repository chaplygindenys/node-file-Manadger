import { rename } from "fs/promises";
import { existsSync } from "fs";
import { dirname, sep } from "path";
import { errMes } from "../../config.js";

export const renameFile = (path, name) => {
  const s = sep;
  const fileName = `${name}`;
  const filePath = `${path}`;
  try {
    const isFileExists = existsSync(filePath);
    if (isFileExists) {
      const directory = dirname(filePath);
      const newFilePath = `${directory}${s}${fileName}`;
      const isNewFileExists = existsSync(newFilePath);
      if (isFileExists && !isNewFileExists) {
        rename(filePath, newFilePath);
        return "ok";
      } else {
        return errMes();
      }
    } else {
      return errMes();
    }
  } catch (e) {
    return errMes();
  }
};
