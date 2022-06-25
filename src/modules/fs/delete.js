import { existsSync } from "fs";
import { rm } from "fs/promises";
import { errMes } from "../../config.js";

export const rmFile = (path) => {
  try {
    const filePath = `${path}`;
    const isFileExists = existsSync(filePath);
    if (isFileExists) {
      rm(filePath);
      return "ok";
    } else {
      return errMes();
    }
  } catch (e) {
    return errMes();
  }
};
