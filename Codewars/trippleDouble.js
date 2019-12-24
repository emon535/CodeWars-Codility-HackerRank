
//https://www.codewars.com/kata/triple-trouble-1/train/javascript

function tripledouble(num1, num2) {
    //code me
    let result = [];
    let regex = /(\w)\1{2,}/g;
    let matches = num1.toString().match(regex);
    if (matches) {
        result = matches.map(eachMatch => {
            let repeated = eachMatch.toString().split("").slice(0, 2).join("");
            let re = new RegExp(repeated, "g");

            console.log("num1 = ", num1, "num2 =", num2, "match", eachMatch, "repeated", repeated, "pattern", re);
            if (re.test(num2)) {
                console.log("check=>", num2, "with", re);
                return 1;

            }
        })
    }

    result = result.filter(Boolean);
    if (result.length == 0) return 0
    else return 1;
}