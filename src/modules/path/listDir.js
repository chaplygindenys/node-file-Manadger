import { cwd } from "process";
import { errMes } from "../../config.js";
import { readdirSync } from "fs";

export const lsDir = () => {
  try {
    const files = readdirSync(cwd());
    for (const file of files) console.log(file);
    return "ok";
  } catch (err) {
    if (err) {
      return errMes();
    }
  }
};
