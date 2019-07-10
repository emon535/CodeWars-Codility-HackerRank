
// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let flag = false;
    for (let i = 0; i < s1.length; i++){
        if (s2.includes(s1[i])) {
            flag = true;
        }
    }
    // console.log(flag ? "Yes" : "No")

    return (flag ? 'YES' : 'NO');

}


//URL : https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps