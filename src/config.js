import { parseArgs as parseName } from "./modules/cli/args.js";

export const welcom = () => `Welcome to the File Manager, ${parseName()}!`;
export const thank = () => `Thank you for using File Manager, ${parseName()}!`;
export const currentPath = () =>
  `You are currently in ${pathToWorkingDirectory}`;
export const starPath = () => {};
export const invalidInput = `Invalid input`;
export const errMes = `Operation failed`;
//  export const
//  export const
//  export const
//  export const
//  export const
//  export const
//  export const
