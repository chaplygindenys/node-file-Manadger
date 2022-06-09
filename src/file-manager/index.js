import { cl } from "../app.mjs";
import {
  add,
  cat,
  cp,
  cd,
  compress,
  decompress,
  errMes,
  hash,
  invalidInput,
  ls,
  os,
  rm,
  rn,
  up,
} from "../config.js";

export const comdMenager = (cmd, opt1, opt2) => {
  let resalt = "";
  switch (cmd) {
    case errMes():
      resalt = errMes();
      return resalt;
      break;
    case "up":
      resalt = up();
      return resalt;
      break;
    case `cd`:
      resalt = cd(opt1);
      return resalt;
      break;
    case `ls`:
      resalt = ls();
      return resalt;
      break;
    case `cat`:
      resalt = cat(opt1);
      return resalt;
      break;
    case `add`:
      resalt = add(opt1);
      return resalt;
      break;
    case `rn`:
      resalt = rn(opt1, opt2);
      return resalt;
      break;
    case `cp`:
      resalt = cp(opt1, opt2);
      return resalt;
      break;
    case `mv`:
      resalt = mv(opt1, opt2);
      return resalt;
      break;
    case `rm`:
      resalt = rm(opt1);
      return resalt;
      break;
    case `os`:
      resalt = os(opt1);
      return resalt;
      break;
    case `hash`:
      resalt = hash(opt1);
      return resalt;
      break;
    case `compress`:
      resalt = compress(opt1, opt2);
      return resalt;
      break;
    case `decompress`:
      resalt = decompress(opt1, opt2);
      return resalt;
      break;
    case "exit":
    case ".exit":
      resalt = "exit";
      return resalt;
      break;
    default:
      resalt = invalidInput();
      return resalt;
      break;
  }
};
