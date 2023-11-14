let fibo = function* () {
  let a = 0,
    b = 1;
  yield a;
  yield b;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
};

let fibo_num = fibo();

console.log(fibo_num.next());
console.log(fibo_num.next());
console.log(fibo_num.next());
console.log(fibo_num.next());
console.log(fibo_num.next());
console.log(fibo_num.next());

function* filter(iterable, filterFunction) {
  for (let element of iterable) {
    if (filterFunction(element)) yield element;
  }
}

let evenFibo = filter(fibo(), (x) => x % 2 === 0);
console.log("Filter:");
console.log(evenFibo.next());
console.log(evenFibo.next());
console.log(evenFibo.next());
console.log(evenFibo.next());
