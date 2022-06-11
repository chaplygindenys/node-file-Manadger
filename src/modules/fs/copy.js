import { existsSync, mkdirSync } from "fs";
import { parse, sep } from "path";
import { pipeline } from "stream";
import { errMes } from "../../config.js";
import { MyReadSt } from "./MyReadSt.js";
import { MyWriteSt } from "./MyWriteSt.js";

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
        const writeToFile = new MyWriteSt(`${newDir}${sep}${fileName}`);
        const readFromFile = new MyReadSt(filePath);

        pipeline(readFromFile, writeToFile, (err) => {
          if (err) {
            return errMes();
          }
        });
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
