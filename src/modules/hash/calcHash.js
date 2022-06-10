import { createReadStream, existsSync } from "fs";
import { errMes } from "../../config.js";
const { createHash } = await import("crypto");

export const calcHash = (path) => {
  try {
    const filePath = `${path}`;
    const isFileExists = existsSync(filePath);
    if (isFileExists) {
      const readStream = createReadStream(filePath);
      const hash = createHash("sha256");
      hash.on("readable", () => {
        const data = hash.read();
        if (data) {
          console.log(data.toString("hex"));
        }
      });
      readStream.on("data", (data) => {
        hash.write(data);
        hash.end();
      });
      return "ok";
    } else {
      return errMes();
    }
  } catch (error) {
    return errMes();
  }
};
