import { createGzip } from "zlib";
import { dirname } from "path";
import { URL } from "url";
import fs, { createReadStream, createWriteStream } from "fs";

export const compress = async () => {
  try {
    const gzip = createGzip();
    const __filename = new URL("./files/fileToCompress.txt", import.meta.url)
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

    const source = createReadStream(__filename);
    const destination = createWriteStream(`${__dirname}/archive.gz`);
    source.pipe(gzip).pipe(destination);
  } catch (error) {
    console.error(error.message);
  }
};

compress();

// import fs from "fs";
// import path from "path";
// import zlib from "zlib";
// import stream from "stream";
// import url from "url";
// import util from "util";

// const pipe = util.promisify(stream.pipeline);
// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
// const CURRENT_FILE = path.join(__dirname, "files", "fileToCompress.txt");
// const TARGET_FILE = path.join(__dirname, "files", "archive.gz");

// const useZlib = async () => {
//   const gzip = zlib.createGzip();
//   const source = fs.createReadStream(CURRENT_FILE);
//   const destination = fs.createWriteStream(TARGET_FILE);
//   await pipe(source, gzip, destination);
// };

// export const compress = async () => {
//   await fs.promises
//     .access(CURRENT_FILE)
//     .then(async () => await useZlib())
//     .then(async () => await fs.promises.unlink(CURRENT_FILE))
//     .catch((e) => {
//       throw new Error("FS operation failed");
//     });
// };

// compress();
