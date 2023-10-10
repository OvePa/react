let shapeName = "Rectangle",
  a = 5,
  b = 3;

let shape = {
  shapeName,
  a,
  b,
  logArea() {
    console.log("Area: " + a * b);
  },
  id: 0,
};

shape.logArea();
