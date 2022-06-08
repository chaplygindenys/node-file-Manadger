import fs, { createReadStream } from "fs";
import { dirname } from "path";
import { URL } from "url";
import { stdout } from "process";
const { createHash } = await import("crypto");

export const calculateHash = async () => {
  try {
    const srcPath = "./files";
    const filePath = `${srcPath}/fileToCalculateHashFor.txt`;

    const __filename = new URL(
      "./files/fileToCalculateHashFor.txt",
      import.meta.url
    ).pathname;
    const __dirname = dirname(filePath);
    console.log(__filename);
    console.log(filePath);
    console.log(__dirname);
    const hash = createHash("sha256");

    const isDirExists = fs.existsSync(__dirname);

    if (!isDirExists) {
      throw new Error("Error: no such directory");
    }

    const isFileExists = fs.existsSync(__filename);

    if (!isFileExists) {
      throw new Error("Error: no such file");
    }

    const input = createReadStream(__filename);
    input.pipe(hash).setEncoding("hex").pipe(stdout);
  } catch (error) {
    console.error(error.message);
  }
};

calculateHash();

// import fs from "fs";
// import crypto from "crypto";
// import path from "path";
// import url from "url";

// const TARGET_FILE = path.join(
//   path.dirname(url.fileURLToPath(import.meta.url)),
//   "files",
//   "fileToCalculateHashFor.txt"
// );

// export const calculateHash = async () => {
//   const readStream = fs.createReadStream(TARGET_FILE);
//   const hash = crypto.createHash("sha256");

//   hash.on("readable", () => {
//     const data = hash.read();
//     if (data) {
//       console.log(data.toString("hex"));
//     }
//   });
//   readStream.on("data", (data) => {
//     hash.write(data);
//     hash.end();
//   });
// };

// calculateHash();
