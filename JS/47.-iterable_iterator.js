let countdownIterator = {
  countdown: 10,
  next() {
    this.countdown -= 1;
    return {
      done: this.countdown === 0,
      value: this.countdown,
    };
  },
};

let countdownIterable = {
  [Symbol.iterator]() {
    return Object.assign({}, countdownIterator);
  },
};
let iterator = countdownIterable[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

console.log(typeof countdownIterable);
console.log(typeof countdownIterator);
console.log(typeof iterator);

for (let i = 0; i < 8; i++) {
  console.log(iterator.next());
}

console.log([...countdownIterable]);
