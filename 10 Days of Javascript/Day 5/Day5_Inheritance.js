/*
 * @Author: Foysal Ahmed Emon
 * @Date: 2019-05-05 02:52:18
 * @Last Modified by:   emon535
 * @Last Modified time: 2019-05-05 02:52:18
 */

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 *
 */

Rectangle.prototype.area = function() {
  return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.w = s;
    this.h = s;
  }
}

if (
  JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ===
  JSON.stringify(["constructor"])
) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}
