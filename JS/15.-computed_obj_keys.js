// In JavaScript, objects are associative arrays (hashmaps) with String keys.
let arr = [1, 2, 3, 4, 5];

let experimentObject = {
  [arr.length]: 2,
  [arr]: 1,
  [{}]: 3,
  arr,
};
console.log(experimentObject);
/* 
{
    "5": 2,
    "1,2,3,4,5": 1,  
    "[object Object]": 3,
    "arr": [1,2,3,4,5]
}
*/
console.log(experimentObject.arr); // [1,2,3,4,5]
console.log(experimentObject["arr"]); // [1,2,3,4,5]
console.log(experimentObject[arr]); // 1
console.log(experimentObject[arr.length]); // 2
console.log(experimentObject["[object Object]"]); // 3
console.log(experimentObject[experimentObject]); // 3

/*
Conclusion:
Arrays and objects are converted to their toString values.

arr.toString() equals the concatenation of the toString value of each of its elements, joined by commas.

The toString value of an object is [object Object] regardless of its contents.

When creating or accessing a property of an object, the respective toString values are compared.
*/
