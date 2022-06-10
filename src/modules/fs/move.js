import { existsSync, mkdirSync } from "fs";
import { copyFile } from "fs/promises";
import { parse, sep } from "path";
import { errMes } from "../../config.js";
import { rmFile } from "./delete.js";

export const mvFile = (pathFrom, dierctory) => {
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
        const newFile = `${newDir}${sep}${fileName}`;
        copyFile(filePath, newFile).then(() => {
          const isNewFileExists = existsSync(newFile);
          if (isNewFileExists) {
            rmFile(filePath);
          }
        });
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
