import { invalidInput } from "../config.js";

export const comdMenager = (cmd) => {
  let resalt = "";
  switch (cmd) {
    case "exit":
    case ".exit":
      resalt = "exit";
      return resalt;
      break;
    default:
      resalt = invalidInput;
      return resalt;
      break;
  }
};
