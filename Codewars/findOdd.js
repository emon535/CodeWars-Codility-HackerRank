// Problem : Find the odd int

function findOdd(A) {
  var mapA = A.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  for (let val in mapA) {
    if (mapA[val] % 2 !== 0) {
      return parseInt(val);
    }
  }
}
