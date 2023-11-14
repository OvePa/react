let errorDemo = function* () {
  yield 1;
  yield "Error yielding the next error";
  yield 3;
};

let it = errorDemo();

console.log(it.next());
console.log(it.next());
console.log([...errorDemo()]);

for (let element of errorDemo()) {
  console.log(element);
}
