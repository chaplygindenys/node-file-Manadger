import { existsSync, mkdirSync } from "fs";
import { copyFile } from "fs/promises";
import { parse, sep } from "path";
import { errMes } from "../../config.js";

export const cpFile = (pathFrom, dierctory) => {
  const newDir = `${dierctory}`;
  const filePath = `${pathFrom}`;
  try {
    const isFileExists = existsSync(filePath);

    if (isFileExists) {
      const fileName = parse(filePath).name;
      let isNewDirExists = existsSync(newDir);
      if (!isNewDirExists) {
        mkdirSync(newDir, { recursive: false });
      }
      isNewDirExists = existsSync(newDir);
      if (isFileExists && isNewDirExists) {
        copyFile(filePath, `${newDir}${sep}${fileName}`);
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
