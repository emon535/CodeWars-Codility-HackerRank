/*
 * @Author: Foysal Ahmed Emon 
 * @Date: 2019-05-05 03:03:11 
 * @Last Modified by:   emon535 
 * @Last Modified time: 2019-05-05 03:03:11 
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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let newNums = nums.map((num,index) => {
        return num = num % 2 ? num * 3 : num * 2; 
    })
    return newNums;
}

nums = [1,2,3,4,5];
console.log(modifyArray(nums));


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}