
// https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p) {
    // ...
    let arrN = []
    let checkIntTypeRegex = /^-?[0-9]+$/;

    arrN = n.toString().split("");
    let val = 0;


    arrN.forEach((item, index) => {
        console.log(p);
        val += Math.pow(item, p)
        console.log(val);
        p++;
    })

    return er.test(val / n) ? val / n : -1

    // Alternative Solutions:
    // var  x = arrN.reduce((sum, value, index)=>sum+Math.pow(value. p+index), 0);
}