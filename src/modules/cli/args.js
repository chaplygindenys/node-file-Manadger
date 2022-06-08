import { argv } from "process";

// export const parseArgs = () => {
//   let resalt = [];
//   for (let index = 0; index < +argv.length; index++) {
//     resalt.push(`${argv[index]}`);
//   }
//   return resalt;
// };

// parseArgs();

// export const parseArgs = () => {
//   for (let id = 2; id < process.argv.length; id++) {
//     console.log(`${process.argv[id].slice(2)} is ${process.argv[++id]}`);
//   }
// };

// parseArgs();

export const parseArgs = () => {
  let resalt = "";
  const args = process.argv;
  args.forEach((element) => {
    if (element.startsWith("--username")) {
      resalt = element.slice(11);
    }
  });
  return resalt;
};

parseArgs();
