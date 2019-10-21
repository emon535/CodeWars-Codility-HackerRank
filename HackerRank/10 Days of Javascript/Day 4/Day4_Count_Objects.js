/*
 * @Author: Foysal Ahmed Emon 
 * @Date: 2019-05-05 02:22:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-05 02:22:57
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
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++){
            if (objects[i].x == objects[i].y) {
                count++; 
            }
    }
    return count;
}


// Other process : Map Reduce;
function getCount(objects) {
    let newObj = objects.filter(function (obj) {
        return obj.x === obj.y;
    });
    return newObj.length;
}

//Other shortcut Method : 

function getCount(objects) {
    let n = 0;
    for(let o of objects) {
        n += (o.x == o.y);
    }
    return n;
}





function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}