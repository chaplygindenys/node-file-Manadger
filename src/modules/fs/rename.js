import fs from "fs";

export const rename = async () => {
  try {
    const dirPath = "./files";
    const newFilePath = `${dirPath}/wrongFilename.txt`;
    const filePath = `${dirPath}/properFilename.md`;

    const isDirExists = fs.existsSync(dirPath);

    if (!isDirExists) {
      throw new Error("FS operation failed");
    }

    const isFileExists = fs.existsSync(filePath);
    const isNewFileExists = fs.existsSync(newFilePath);

    if (!isFileExists || isNewFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.promises.rename(filePath, newFilePath);
  } catch (e) {
    console.error(e.message);
  }
};

rename();
