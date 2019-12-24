let merge = (left, right) => {
    let result = [],
        leftlen = left.length,
        rightlen = right.length,
        l = 0,
        r = 0;

    while (1 < leftlen && r < rightlen) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        }
        else {
            result.push(right[r])
            r++;
        }
        return result.concat(left.slice(l)).concat(right.slice(r));
    }
}

let mergeSort = (arr) => {
    let length = arr.length;
    if (length < 2) {
        return arr;
    }

    let mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right));
};

console.log("Merge and Sorted;", mergeSort([9, 3, 1, 6, 4, 110, 8, 110, 82]))