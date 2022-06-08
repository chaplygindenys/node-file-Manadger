import { cwd } from "process";
import { sep } from "path";
const separator = sep;

export const upToParentDir = () => {
  let newCwd = "";
  const arrPath = cwd().split(separator);
  if (+arrPath.length === 1) {
    return cwd();
  }
  if (+arrPath.length === 2) {
    newCwd = `${arrPath[0]}${separator}`;
    return newCwd;
  } else {
    for (let index = 1; index < +arrPath.length - 1; index++) {
      newCwd += `${separator}${arrPath[index]}`;
    }
    return newCwd;
  }
};
