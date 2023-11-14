let countdownGenerator = function* () {
  let i = 10;
  while (i > 0) yield --i;
};

let lampGenerator = function* () {
  yield "green";
  yield "red";
};

let countdownThenLampGenerator = function* () {
  yield* countdownGenerator();
  yield* lampGenerator();
};

console.log([...countdownThenLampGenerator()]);
