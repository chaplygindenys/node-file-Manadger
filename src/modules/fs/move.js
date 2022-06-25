import { existsSync, mkdirSync } from "fs";
import { extname, parse, sep } from "path";
import { errMes } from "../../config.js";
import { rmFile } from "./delete.js";
import { MyReadSt } from "./MyReadSt.js";
import { MyWriteSt } from "./MyWriteSt.js";
import { pipeline } from "stream";

export const mvFile = (pathFrom, dierctory) => {
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
        const newFile = `${newDir}${sep}${fileName}${extName}`;
        const writeToNewFile = new MyWriteSt(newFile);
        const readFromFilePath = new MyReadSt(pathFrom);
        pipeline(readFromFilePath, writeToNewFile, (err) => {
          if (err) {
            throw new Error(err);
          } else {
            const isNewFileExists = existsSync(newFile);
            if (isNewFileExists) {
              const rmDone = rmFile(pathFrom);
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
