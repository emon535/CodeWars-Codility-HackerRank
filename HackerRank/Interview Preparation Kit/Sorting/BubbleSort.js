// Complete the countSwaps function below.
function countSwaps(a) {
    let temp = 0;
    let count = 0;
    let n = a.length
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
           
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                count++;
                temp = a[j + 1] //2
                a[j + 1] = a[j] //3 
                a[j] = temp //2 
            }
        }
    }
    console.log("Array is sorted in", count, "swaps.")
    console.log("First Element:",a[0])
    console.log("Last Element:",a[n-1])

}


//URL : https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
