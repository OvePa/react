let shapeName = "Rectangle",
  a = 5,
  b = 3;

let shape = { shapeName, a, b, id: 0 };

console.log(shape);
// { shapeName: "Rectangle", a: 5, b: 3, id: 0 }

let { x, y } = { x: 3, y: 4, z: 2 };

console.log(y, typeof y);
// 4 "number"
