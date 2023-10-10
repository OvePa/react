let proto = {
  whoami() {
    console.log("I am proto");
  },
};

let obj = {
  whoami() {
    // concise method
    super.whoami();
    console.log("I am obj");
  },
};

console.log(Object.getPrototypeOf(obj));
//{}

Object.setPrototypeOf(obj, proto);

obj.whoami();
// I am proto
// I am obj

/*
The following points are worth noting:

The prototype of an object is Object by default.

Object.setPrototypeOf can change this prototype to any object

The super call saves some typing. Without super, we would have to write the following:
Object.getPrototypeOf( obj ).whoami.call( this );
*/
