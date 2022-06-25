import * as zlib from "zlib";
import { createReadStream, createWriteStream, existsSync, statSync } from "fs";
import { errMes } from "../../config.js";
import { pipeline } from "stream";

export const compressFile = (pathFrom, pathTo) => {
  try {
    const isFileFromExists = existsSync(pathFrom);

    if (isFileFromExists) {
      pipeline(
        createReadStream(`${pathFrom}`),
        zlib.createBrotliCompress({
          chunkSize: 32 * 1024,
          params: {
            [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
            [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
            [zlib.constants.BROTLI_PARAM_SIZE_HINT]: statSync(pathFrom).size,
          },
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
