let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 === symbol2);
//> false
console.log(typeof symbol1);
//> "symbol"
let myObject = {
  publicProperty: 'Value of myObject ["publicProperty"]',
};

myObject[symbol1] = "Value of myObject [symbol1]";
myObject[symbol2] = "value of myObject [symbol2]";

console.log(myObject);
//> Object
//>    publicProperty: "Value of myObject[ "publicProperty" ]"
//>    Symbol(): "Value of myObject[ symbol1 ]"
//>    Symbol(): "value of myObject[ symbol2 ]"
//>    __proto__: Object

console.log(myObject[symbol1]);
//> Value of myObject[ symbol1 ]

/*
Properties with a symbol key don’t appear in the JSON representation of your object. Not even the for-in loop or Object.keys can enumerate them:
 */
JSON.stringify(myObject);
//> "{"publicProperty":"Value of myObject[ \"publicProperty\" ] "}"

for (var prop in myObject) {
  console.log(prop, myObject[prop]);
}
//> publicProperty Value of myObject[ "publicProperty" ]

console.log(Object.keys(myObject));
//> ["publicProperty"]

console.log(Object.getOwnPropertySymbols(myObject));
//> [Symbol(), Symbol()]

console.log(myObject[Object.getOwnPropertySymbols(myObject)[0]]);
//> "Value of myObject[ symbol1 ]"

//shallow copies
clonedObject = Object.assign({}, myObject);

console.log(clonedObject);
//> Object
//>    publicProperty: "Value of myObject[ "publicProperty" ]"
//>    Symbol(): "Value of myObject[ symbol1 ]"
//>    Symbol(): "value of myObject[ symbol2 ]"
//>    __proto__: Object

// naming symbols
let leftNode = Symbol("Binary tree node");
let rightNode = Symbol("Binary tree node");

console.log(leftNode);
//> Symbol(Binary tree node)

leftNode = Symbol("Binary tree node");
rightNode = Symbol("Binary tree node");
console.log(leftNode === rightNode);
//> false
