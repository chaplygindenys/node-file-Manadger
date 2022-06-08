export const parseEnv = () => {
  return console.log(
    Object.keys(process.env)
      .filter((name) => name.startsWith("RSS_"))
      .map((name) => `${name}=${process.env[name]}`)
      .join("\n")
  );
};

parseEnv();

// export const parseEnv = () => {
//   const values = process.env;
//   for (let value in values) {
//     value.startsWith("RSS_") ? console.log(`${value}=${values[value]}`) : null;
//   }
// };

// parseEnv();
