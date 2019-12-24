// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let sum = arr.reduce((a, b) => a + b);
    console.log(sum - max, sum - min)
}
