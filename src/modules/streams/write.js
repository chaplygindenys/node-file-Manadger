import fs, { createReadStream, createWriteStream } from "fs";
import { dirname } from "path";
import { URL } from "url";
import { stdin } from "process";

export const write = async () => {
  try {
    const __filename = new URL("./files/fileToWrite.txt", import.meta.url)
      .pathname;
    const __dirname = dirname(__filename);

    const isDirExists = fs.existsSync(__dirname);

    if (!isDirExists) {
      throw new Error("Error: no such directory");
    }

    const isFileExists = fs.existsSync(__filename);

    if (!isFileExists) {
      throw new Error("Error: no such file");
    }

    const input = createWriteStream(__filename);
    stdin.pipe(input);
  } catch (error) {
    console.error(error.message);
  }
};

write();

// import fs from "fs";
// import url from "url";
// import path from "path";

// const TARGET_FILE = path.join(
//   path.dirname(url.fileURLToPath(import.meta.url)),
//   "files",
//   "fileToWrite.txt"
// );

// export const write = async () => {
//   const stream = fs.createWriteStream(TARGET_FILE);
//   console.log("Write your text:");

//   process.stdin.on("data", (data) => {
//     stream.write(data);
//   });
// };

// write();
