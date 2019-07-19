const ArrayRotation = require("./ArrayRotation");

test("fineLength", () => {
  A = [1, 2, 3, 4, 5, 6];
  expect(ArrayRotation(A, 2).tobe(6));
});
