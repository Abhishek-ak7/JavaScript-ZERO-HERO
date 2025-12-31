/*

🟢 Q2. Even / Odd Check
👉 Ek number lo
👉 Check karo even hai ya odd

*/

// solution:
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(n) {
  n = Number(n);   // string → number

  if (n % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  rl.close();
});

