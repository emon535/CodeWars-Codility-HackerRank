
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log("Called!")
    let sum = -64;
    let max = -64;
    console.log(arr.length)
    let i = 0; let j = 0;
    for (i = 0; i < arr.length - 2; i++) {
        for (j = 0; j < arr[i].length - 2; j++) {
            sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
            if (sum >= max) {
                max = sum;
            }

        }
        console.log(max)
    }

    return max;

}


//URL : https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
