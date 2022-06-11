import { lstatSync } from "fs";
import { errMes } from "../../config.js";
import { MyReadSt } from "./MyReadSt.js";
import { pipeline } from "stream";
import { stdout } from "process";

export const read = (path) => {
  try {
    if (lstatSync(path).isFile()) {
      const readFromFilePath = new MyReadSt(path);
      pipeline(readFromFilePath, stdout, (err) => {
        if (err) {
          throw new Error(err);
        }
      });
      return "ok";
    } else {
      return errMes();
    }
  } catch (e) {
    return errMes();
  }
};
