"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let diff = 0;
  let count = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i + 1) {
      // 2 > 1
      if (q[i] - (i + 1) > 2) {
        console.log("Too chaotic");
        return;
      }
    }

    for (let j = Math.max(i + 1, 1, q[i] - 2); j < q.length; j++) {
      // console.log("j==>",j)
      if (q[i] > q[j]) {
        // 2> 2
        // 2>5
        // 2>1
        // 2>3
        // console.log("a bribe case")
        count++;
      }
    }
  }

  console.log(count);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(" ")
      .map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
