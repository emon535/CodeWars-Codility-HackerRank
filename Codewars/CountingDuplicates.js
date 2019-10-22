
// https://www.codewars.com/kata/counting-duplicates/train/javascript

function duplicateCount(text) {
    //...
    text = text.split("").map(v => v.toLowerCase());;
    var mapA = text.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    let count = 0;

    for (key in mapA) {
        if (mapA[key] > 1) {
            count++;
        }
    }

    return count;
}