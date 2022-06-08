import * as readline from "readline";
import { comdMenager } from "./file-manager/index.js";
import {
  welcom,
  thank,
  currentPath,
  invalidInput,
  errMes,
  startPath,
} from "./config.js";

export const cl = (str) => {
  console.log(str);
};
process.chdir(startPath());

const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
    prompt: `${currentPath()}>`,
  },
  cl(welcom())
);
rl.prompt();

// rl.on("resume", () => {
//   console.log("Readline resumed.");
// });
// rl.on("pause", () => {
//   console.log("Readline paused.");
// });

// rl.on("SIGCONT", () => {
//   cl("sigcon.");
// });
// rl.on("SIGINT", () => {
//   cl("SIGINT");
// });
// rl.on("SIGTSTP", () => {
//   cl("SIGNTP");
// });

const myline = rl.on("line", (line) => {
  let cmd = "";
  let opt1 = "";
  let opt2 = "";
  const arrLine = line.split(" ");
  cmd = arrLine[0];
  opt1 = arrLine[1];
  opt2 = arrLine[2];
  const resalt = comdMenager(cmd, opt1, opt1);
  cl(resalt.toUpperCase());
  if (resalt === errMes()) {
    cl(errMes());
  }
  if (resalt === invalidInput()) {
    cl(invalidInput());
  }
  if (resalt === "exit") {
    rl.close();
  }
  rl.prompt();
});

// myline.on("SIGCONT", () => {
//   cl("sigcon.");
// });
// myline.on("SIGINT", () => {
//   cl("SIGINT");
// });
// myline.on("SIGTSTP", () => {
//   cl("SIGNTP");
// });
// myline.on("pause", () => {
//   cl("Readline paused");
// });

// myline.on("resume", () => {
//   console.log("Readline resumed.");
// });

myline.on("close", () => {
  cl(thank());
  process.exit(0);
});
