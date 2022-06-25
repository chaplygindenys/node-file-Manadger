import { errMes } from "../../config.js";
import { arch, cpus, EOL, userInfo } from "os";

export const opSistem = (opt1) => {
  let resalt = "";
  switch (opt1) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      resalt = "--EOL";
      return resalt;
      break;
    case "--cpus":
      for (let i = 0; i < cpus().length; i++) {
        console.table(
          `model:${cpus()[i].model}${EOL}speed:${cpus()[i].speed}${EOL}`
        );
      }
      console.log(`CPUS NUMBERS: ${cpus().length}`);
      resalt = "--cpus";
      return resalt;
      break;
    case `--homedir`:
      resalt = `--homedir`;
      console.log(`${userInfo().homedir}`);
      return resalt;
      break;
    case `--username`:
      resalt = `--username`;
      console.log(`${userInfo().username}`);
      return resalt;
      break;
    case `--architecture`:
      console.log(JSON.stringify(arch()));
      resalt = `--architecture`;
      return resalt;
      break;
    default:
      resalt = errMes();
      return resalt;
      break;
  }
};
