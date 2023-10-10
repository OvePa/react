let moreColors = new Set(["red", "blue", "red", "orange"]);
console.log("forEach function:");
moreColors.forEach((value) => console.log(value));
//> red
//> blue
console.log("+".repeat(10));
console.log("for...of loops:");
for (let color of moreColors) {
  console.log(color);
}
console.log("+".repeat(10));
console.log("spread operator:");
console.log([...moreColors]);
console.log("+".repeat(10));
console.log(moreColors);
console.log("+".repeat(10));
moreColors.forEach(console.log);

/*
As console.log accepts a variable number of arguments, it prints all the arguments the iteration provides. These are:

the upcoming value stored in the set,
the belonging key,
a reference to the set itself.
The second and the third arguments are not too useful. Keys and values are pairwise equal in sets. Therefore, the first two arguments are always equivalent in sets. The reason why a key was provided in forEach is compatibility with maps. We may need the third argument in case we don’t have a reference to the set. However, use cases for this are rare.

As Set is an ordered list, iteration is performed in the order of adding the elements.
*/
