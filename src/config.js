import { parseArgs as parseName } from "./modules/cli/args.js";
import { workDir } from "./modules/path/workDir.js";
import { homeDir } from "./modules/path/homeDir.js";
import { upToParentDir } from "./modules/path/upToParentDir.js";
import { cl } from "./app.mjs";
import { chdir, cwd } from "process";
import { lsDir } from "./modules/path/listDir.js";
import { cdDir } from "./modules/path/cdDir.js";

export const welcom = () => `Welcome to the File Manager, ${parseName()}!`;
export const thank = () => `Thank you for using File Manager, ${parseName()}!`;
export const currentPath = () => `You are currently in: ${workDir()}`;
export const invalidInput = () => `Invalid input`;
export const errMes = () => `Operation failed`;
export const startPath = () => `${homeDir()}`;
export const up = () => {
  chdir(upToParentDir());
  return cwd();
};
export const cd = (path) => `${cdDir(path)}`;
export const ls = () => `${lsDir()}`;

export const cat = (path) => path;
export const add = (name) => name;
export const rn = (path, name) => `${(path, name)}`;
export const cp = (path, dir) => `${(path, dir)}`;
export const mv = (path, dir) => `${(path, dir)}`;
export const rm = (path) => `${path}`;
export const os = (opt) => `${opt}`;
export const hash = (path) => `${path}`;
export const compress = (path, pathTo) => `${(path, pathTo)}`;
export const decompress = (path, pathTo) => `${(path, pathTo)}`;
