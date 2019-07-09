// URL : https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let sortedPrice = prices.sort(function (a, b) { return a - b })
    let sum = 0;
    let collectedItem = []
    for (let i = 0; i < sortedPrice.length; i++){
        if (sum < k) {
            sum = sum + sortedPrice[i];
            collectedItem.push(sortedPrice[i])
        }
    }
    return collectedItem.length-1;

}