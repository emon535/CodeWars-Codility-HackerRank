// Complete the minimumBribes function below.
// function minimumBribes(q) {
//   let diff = 0;
//   let count = 0;
//   for (let i = 0; i < q.length; i++) {
//     if (q[i] > i + 1) {
//       // 2 > 1
//       if (q[i] - (i + 1) > 2) {
//         console.log("Too chaotic");
//         return;
//       }
//     }

//     for (let j = Math.max(i + 1, 1, q[i] - 2); j < q.length; j++) {
//       // console.log("j==>",j)
//       if (q[i] > q[j]) {
//         // 2> 2
//         // 2>5
//         // 2>1
//         // 2>3
//         // console.log("a bribe case")
//         count++;
//       }
//     }
//   }

//   console.log(count);
// }

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--) {
    let position = i;
    let item = q[i];
    if (item - i > 3) {
      return `Too chaotic`;
    }
    if (item > position + 1) {
      swaps += item - (position + 1);
    } else {
      if (min > item) {
        min = item;
      } else if (item != min) {
        swaps++;
      }
    }
  }

  return swaps;
}

// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
console.log(minimumBribes([3, 2, 1]));
