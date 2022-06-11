import { existsSync, mkdirSync } from "fs";
import { parse, sep } from "path";
import { errMes } from "../../config.js";
import { rmFile } from "./delete.js";
import { MyReadSt } from "./MyReadSt.js";
import { MyWriteSt } from "./MyWriteSt.js";
import { pipeline } from "stream";

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
        const writeToNewFile = new MyWriteSt(newFile);
        const readFromFilePath = new MyReadSt(filePath);
        pipeline(readFromFilePath, writeToNewFile, (err) => {
          if (err) {
            throw new Error(err);
          } else {
            const isNewFileExists = existsSync(newFile);
            if (isNewFileExists) {
              const rmDone = rmFile(filePath);
              if (rmDone !== "ok") {
                throw new Error("rm");
              }
            }
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
