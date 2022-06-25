import { existsSync, mkdirSync } from "fs";
import { extname, parse, sep } from "path";
import { pipeline } from "stream";
import { errMes } from "../../config.js";
import { MyReadSt } from "./MyReadSt.js";
import { MyWriteSt } from "./MyWriteSt.js";

export const cpFile = (pathFrom, dierctory) => {
  const newDir = `${dierctory}`;
  const extName = extname(pathFrom);
  try {
    const isFileExists = existsSync(pathFrom);

    if (isFileExists) {
      const fileName = parse(pathFrom).name;
      let isNewDirExists = existsSync(newDir);
      if (!isNewDirExists) {
        mkdirSync(newDir, { recursive: false });
      }
      isNewDirExists = existsSync(newDir);
      if (isFileExists && isNewDirExists) {
        const writeToFile = new MyWriteSt(
          `${newDir}${sep}${fileName}${extName}`
        );
        const readFromFile = new MyReadSt(pathFrom);

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
