// Problem: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
// Score: 20

"use strict";

const fs = require("fs");

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let n = c.length;
  let count = 0;
  for (let i = 0; i + 2 <= n; ) {
    if (c[i + 2]) {
      i = i + 1;
    } else {
      i = i + 2;
    }
    count++;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const c = readLine()
    .split(" ")
    .map(cTemp => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c);

  ws.write(result + "\n");

  ws.end();
}
