import { Transform } from "stream";
import { stdin, stdout } from "process";

export const transform = async () => {
  try {
    const readable = stdin;
    const writable = stdout;

    const transform = new Transform({
      transform(chunk, enc, callback) {
        const chunkStringified = chunk.toString().trim();
        const chunkReversed = chunkStringified.split("").reverse().join("");

        callback(null, chunkReversed + "\n");
      },
    });

    stdin.pipe(transform).pipe(stdout);
  } catch (error) {
    console.error(error.message);
  }
};

transform();

// import readline from "readline";
// import { stdin as input, stdout as output } from "process";

// const rl = readline.createInterface({ input, output });
// export const transform = async () => {
//   console.log("Write your text:");
//   rl.on("line", (message) => {
//     output.write(message.split("").reverse().join("") + "\n");
//   });
// };

// transform();
