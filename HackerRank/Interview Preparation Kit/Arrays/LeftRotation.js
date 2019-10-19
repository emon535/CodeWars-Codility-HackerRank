// Complete the rotLeft function below.
function rotLeft(a, d) {
    var len = a.length;
    var location = [];
    var temp = a;
    for (var i = 0; i < len; i++) {
        var newLocation = (i + d) % len;
        location.push(newLocation);
    }

    let result = []
    for (let i = 0; i < len; i++){
        result[i] = temp[location[i]]
    }
    
    return result;
}


//URL : https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
