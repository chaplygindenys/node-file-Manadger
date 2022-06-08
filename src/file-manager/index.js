import {
  add,
  cat,
  cd,
  compress,
  decompress,
  errMes,
  hash,
  invalidInput,
  ls,
  os,
  rm,
  up,
} from "../config.js";

export const comdMenager = (cmd, name, pathFrom, pathTo, dir) => {
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
      resalt = cd();
      return resalt;
      break;
    case `ls`:
      resalt = ls();
      return resalt;
      break;
    case `cat`:
      resalt = cat();
      return resalt;
      break;
    case `add`:
      resalt = add(name);
      return resalt;
      break;
    case `rn`:
      resalt = rn(pathFrom, name);
      return resalt;
      break;
    case `cp`:
      resalt = cp(pathFrom, dir);
      return resalt;
      break;
    case `mv`:
      resalt = mv(pathFrom, dir);
      return resalt;
      break;
    case `rm`:
      resalt = rm(pathFrom);
      return resalt;
      break;
    case `os`:
      resalt = os();
      return resalt;
      break;
    case `hash`:
      resalt = hash(pathFrom);
      return resalt;
      break;
    case `compress`:
      resalt = compress(pathFrom, pathTo);
      return resalt;
      break;
    case `decompress`:
      resalt = decompress(pathFrom, pathTo);
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
