import * as zlib from "zlib";
import { createReadStream, createWriteStream, existsSync, statSync } from "fs";
import { errMes } from "../../config.js";
import { pipeline } from "stream";

export const decompressFile = (pathFrom, pathTo) => {
  try {
    const isFileFromExists = existsSync(pathFrom);

    if (isFileFromExists) {
      pipeline(
        createReadStream(`${pathFrom}`),
        zlib.createBrotliDecompress({
          chunkSize: 32 * 1024,
        }),
        createWriteStream(`${pathTo}`),
        (e) => {
          if (e) {
            return errMes();
          }
        }
      );
      return "ok";
    } else {
      return errMes();
    }
  } catch (error) {
    return errMes();
  }
};
