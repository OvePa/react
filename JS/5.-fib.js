function fib(n) {
  let fibCurrent = 1;
  let fibLast = 0;

  if (n < 0) return Nan;
  if (n <= 1) return n;

  for (let fibIndex = 1; fibIndex < n; ++fibIndex) {
    [fibLast, fibCurrent] = [fibCurrent, fibCurrent + fibLast];
  }
  return fibCurrent;
}

console.log(fib(5));
