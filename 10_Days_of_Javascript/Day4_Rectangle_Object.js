/*
 * @Author: Foysal Ahmed Emon 
 * @Date: 2019-05-05 02:32:31 
 * @Last Modified by:   emon535 
 * @Last Modified time: 2019-05-05 02:32:31 
 */


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
// class Rectangle{
//     constructor(a,b){
//         this.length = a;
//         this.width = b;
//         this.perimeter = a + a + b + b;
//         this.area = a * b;
//    }
       
// }


function Rectangle (a,b) {
    this.length = a;
    this.width = b;
    this.perimeter = a+a+b+b;
    this.area = a*b;
}

function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}