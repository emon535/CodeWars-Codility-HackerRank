// Persistent Bugger.

function persistence(num) {
  //code me
  let count = 0;
  num = num.toString();
  while (num.length > 1) {
    count++;
    num = num
      .split("")
      .reduce((a, b) => a * b)
      .toString();
  }
  return count;
}
