// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  var len = A.length;
  var location = [];
  var temp = A;

  for (var i = len; i > len; i--) {
    var newLocation = (i + K) % len;
    console.log(newLocation);
    location.push(newLocation);
  }

  let result = [];
  for (let i = 0; i < len; i++) {
    result[i] = temp[location[i]];
  }

  return result;
}

solution([3, 8, 9, 7, 6], 3);
