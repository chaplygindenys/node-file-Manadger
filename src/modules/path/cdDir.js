import { chdir } from "process";
import { errMes } from "../../config.js";
import { lstatSync } from "fs";

export const cdDir = (path) => {
  try {
    if (lstatSync(path).isDirectory()) {
      chdir(`${path}`);
      return "ok";
    } else {
      return errMes();
    }
  } catch (err) {
    if (err) {
      return errMes();
    }
  }
};
