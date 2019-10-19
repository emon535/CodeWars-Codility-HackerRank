/*
 * @Author: Foysal Ahmed Emon 
 * @Date: 2019-05-05 02:30:19 
 * @Last Modified by:   emon535 
 * @Last Modified time: 2019-05-05 02:30:19 
 */


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

function Polygon(ar) {
    this.ar = ar;
    this.perimeter = function () {
        var total = ar.reduce(function (sum, value) {
            return sum + value;
        }, 0);
        return total;
    }
}



const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());