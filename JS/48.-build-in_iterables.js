let message = "ok";

let stringIterator = message[Symbol.iterator]();
let secondStringIterator = message[Symbol.iterator]();

console.log(stringIterator.next());
//> Object {value: "o", done: false}

console.log(secondStringIterator.next());
//> Object {value: "o", done: false}

console.log(stringIterator.next());
//> Object {value: "k", done: false}

console.log(stringIterator.next());
//> Object {value: undefined, done: true}

console.log(secondStringIterator.next());
//> Object {value: "k", done: false}

// pairs of key-value
message = [..."ok"];
let pairs = message.entries();

for (let pair of pairs) {
  console.log(pair);
}
