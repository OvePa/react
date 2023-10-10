/*
Sets and maps hold a reference of their values. This means that the garbage collector won’t be able to collect the values in sets, and key-value pairs in maps to free some memory.
*/
let colors = new Set();

colors.add("red");
colors.add("green");
colors.add("red"); // duplicate elements are added only once
console.log(colors);
//> Set {"red", "green"}

console.log("Size: " + colors.size);
//> 2

console.log(
  "has green: " + colors.has("green") + "\nhas blue: " + colors.has("blue")
);
//> true false

console.log("+".repeat(10));
console.log("Before deleting: ");
console.log(colors);
colors.delete("green");
//> true
colors.delete("green");
//> false

console.log("\nAfter deleting: ");
console.log(colors);

console.log("+".repeat(10));
let moreColors = new Set(["red", "blue", "red", "orange"]);
console.log(moreColors);
