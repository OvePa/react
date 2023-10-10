/*
Sets and maps hold a reference of their values. This means that the garbage collector won’t be able to collect the values in sets, and key-value pairs in maps to free some memory.
*/
let horses = new Map();

horses.set(8, "Chocolate");
horses.set(3, "Filippone");
console.log(horses);

// set method is chainable
let horses1 = new Map().set(8, "Chocolate").set(3, "Filippone");
console.log(horses1);

// using arreys of k-v pairs
let horses2 = new Map([
  [8, "Chocolate"],
  [3, "Filippone"],
]);
console.log(horses2);

// methods
console.log("Size:\t\t", horses.size);
// >2

console.log("has id=3:\t\t", horses.has(3));
// >true

console.log("value at 3:\t\t", horses.get(3));
//>filippone

horses.delete(3);
console.log("\nAfter deleting:\t");
console.log(horses);
