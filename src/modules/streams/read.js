import fs, { createReadStream } from "fs";
import { dirname } from "path";
import { URL } from "url";
import { stdout } from "process";

export const read = async () => {
  try {
    const __filename = new URL("./files/fileToRead.txt", import.meta.url)
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

    const input = createReadStream(__filename);
    input.pipe(stdout);
  } catch (error) {
    console.error(error.message);
  }
};

read();

// import fs from "fs";
// import url from "url";
// import path from "path";

// const TARGET_FILE = path.join(
//   path.dirname(url.fileURLToPath(import.meta.url)),
//   "files",
//   "fileToRead.txt"
// );

// export const read = async () => {
//   let dataText = "";
//   const stream = fs.createReadStream(TARGET_FILE, "utf-8");
//   stream.on("data", (chunck) => {
//     dataText += chunck;
//   });
//   stream.on("end", () => {
//     process.stdout.write(dataText);
//   });
// };

// read();
