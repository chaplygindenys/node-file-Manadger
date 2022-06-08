import * as readline from "readline";
import { comdMenager } from "./file-manager/index.js";
import { welcom, thank } from "./config.js";

const cl = (str) => {
  console.log(str);
};

const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
    prompt: "FileManager> ",
  },
  cl(welcom())
);
rl.prompt();
rl.on("line", (line) => {
  cl(line);
  const resalt = comdMenager(line.trim());

  if (resalt === "Invalid input") {
    cl("Invalid input");
  }

  if (resalt === "exit") {
    rl.close();
  }

  rl.prompt();
}).on("close", () => {
  cl(thank());
  process.exit(0);
});
