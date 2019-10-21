/*
 * @Author: Foysal Ahmed Emon 
 * @Date: 2019-05-05 02:28:58 
 * @Last Modified by: emon535 
 * @Last Modified time: 2019-05-05 02:28:58 
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
    // return inputString[currentLine++];
    console.log("Emon")
    return ;
}



function reverseString(s){
    console.log("S");
}


