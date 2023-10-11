let colors = new Set(["red", "yellow", "green"]);
let horses = new Map([
  [5, "QuickBucks"],
  [8, "Chocolate"],
  [3, "Filippone"],
]);

console.log(colors.entries());
//> SetIterator {["red", "red"], ["yellow", "yellow"], ["green", "green"]}

console.log("\n");
console.log(colors.keys());
//> SetIterator {"red", "yellow", "green"}

console.log(colors.values());
//> SetIterator {"red", "yellow", "green"}

console.log(horses.entries());
//> MapIterator {[5, "QuickBucks"], [8, "Chocolate"], [3, "Filippone"]}

console.log(horses.keys());
//> MapIterator {5, 8, 3}

console.log(horses.values());
//> MapIterator {"QuickBucks", "Chocolate", "Filippone"}

/*
A common destructuring pattern is to iterate the keys and values of a map using destructuring in a for-of loop:
*/

for (let [key, values] of horses) {
  console.log(key, values);
}

/*
When creating a set or a map, you can pass any iterable as an argument, provided that the results of the iteration can form a set or a map:
*/
let nineToOne = new Set(countdownIterable);
console.log(nineToOne);

horses = new Map([
  [5, "QuickBucks"],
  [8, "Chocolate"],
  [3, "Filippone"],
]);
console.log(horses);
