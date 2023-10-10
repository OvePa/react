let removeDuplicatesFromArray = function (arr) {
  // Start coding here
  let arr1 = new Set();
  for (let i of arr) {
    arr1.add(i);
  }
  return arr1;
};

let removeDuplicatesFromArraySpread = function (arr) {
  return [...new Set(arr)];
};
let removeDuplicatesFromArraySpread2 = (arr) => [...new Set(arr)];

console.log(removeDuplicatesFromArray([1, 2, 3, 2, 1]));
console.log(removeDuplicatesFromArraySpread([1, 2, 3, 2, 1]));
console.log(removeDuplicatesFromArraySpread2([1, 2, 3, 2, 1]));
