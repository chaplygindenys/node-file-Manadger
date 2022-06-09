import { lstatSync, readFileSync } from "fs";
import { cl } from "../../app.mjs";
import { errMes } from "../../config.js";

export const read = (path) => {
  try {
    if (lstatSync(path).isFile()) {
      const buffer = readFileSync(path, "utf8");
      process.stdout.write(buffer);
      return "ok";
    } else {
      return errMes();
    }
  } catch (e) {
    return errMes();
  }
};
