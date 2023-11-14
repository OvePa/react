let greetings = function* () {
  let name = yield "hi";
  yield `Hello, ${name}!`;
};

let greetingIterator = greetings();

console.log(greetingIterator.next());
//> Object {value: "Hi!", done: false}

console.log(greetingIterator.next("Lewis"));
//> Object {value: "Hello, Lewis!", done: false}

/*
The return value of a generator becomes the return value of a yield * expression.
*/

let sumSequence = function* (num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum += i;
    yield i;
  }
  return sum;
};

let wrapSumSequence = function* (num) {
  let sum = yield* sumSequence(num);
  yield `The sum is: ${sum}.`;
};

console.log("Sum sequence:");
for (let elem of wrapSumSequence(4)) {
  console.log(elem);
}
