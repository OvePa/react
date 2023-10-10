/*When it comes to constructor functions, private members can be declared inside a constructor function using var, let, or const. */
function F() {
  let privateProperty = "b";
  this.publicProperty = "a";
}

let f = new F();
console.log(f.publicProperty); // returns 'a'
console.log(f.privateProperty); // returns undefined

/*
In order to use the same idea for classes, we have to place the method definitions that use private properties in the constructor method in a scope where the private properties are accessible. We will use Object.assign to accomplish this goal. This solution was inspired by an article I read on this topic by Dr. Axel Rauschmayer on Managing private data of ES6 classes11. */
class C {
  constructor() {
    let privateProperty = "a";
    Object.assign(this, {
      logPrivateProperty() {
        console.log(privateProperty);
      },
    });
  }
}

let c = new C();
c.logPrivateProperty();

/*
The field privateProperty is not accessible in the c object. The solution also works when we extend the C class.
 */
// Class C from the above is prepended to keep the code short
class D extends C {
  constructor() {
    super();
    console.log("Constructor of D");
  }
}

let d = new D();
d.logPrivateProperty();
