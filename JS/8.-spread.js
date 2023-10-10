function sumArgs() {
  var result = 0;
  for (var i = 0; i < arguments.length; ++i) {
    result += arguments[i];
  }
  return result;
}

console.log(sumArgs(1, 2, 3, 4, 5, 6, 7));

var arr = [];
for (var j = 0; j < 100; ++j) arr[j] = Math.random();
console.log("Sum:\t" + sumArgs.apply(null, arr));

function sumArgs2(...args) {
  var result = 0;
  result = args.reduce((prev, curr) => prev + curr);
  return result;
}

console.log(sumArgs2(1, 2, 3, 4, 5, 6, 7));

let spreadingStrings = "Spreading Strings";
let charArray = [...spreadingStrings];

console.log(charArray);
