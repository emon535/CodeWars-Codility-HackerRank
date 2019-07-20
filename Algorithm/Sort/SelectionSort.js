function swap(A, x, y) {
  var temp = A[x];
  A[x] = A[y];
  A[y] = temp;
}

function selectionSort(A) {
  for (i = 0; i < A.length - 1; i++) {
    // will have to go n-2 passes
    imin = i; // ith position : elements from i till n-1 are candidates
    for (j = i + 1; j < A.length; j++) {
      if (A[j] < A[imin]) {
        imin = j; //Update the index of the minimum element
      }
      if (imin !== i) {
        swap(A, i, imin);
      } else {
      }
    }
  }

  return A;
}

console.log(selectionSort([1, 5, 6, 2, 3, 1, 4]));
console.log("Hello World");
