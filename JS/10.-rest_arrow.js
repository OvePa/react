// solution 1: using function deckaration
function sumArgs(...numbers) {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

//Solution 2: using arrow function with a function body and explicit return
let sumArgs = (...numbers) => {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

// solution 3: using arroe function with implicit return
let sumArgs = (...numbers) =>
  numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
