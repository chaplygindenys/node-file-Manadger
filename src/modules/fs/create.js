import { appendFile } from "fs/promises";
import { existsSync } from "fs";
import { errMes } from "../../config.js";

export const create = (path) => {
  const isFileExists = existsSync(path);

  try {
    if (!isFileExists) {
      appendFile(path, "");
      return "ok";
    } else {
      return errMes();
    }
  } catch (e) {
    return errMes();
  }
};
