function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// Now, we will write the same function using tail call optimization:

function fib_tail(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fib_tail(n - 1, a + b, a);
  }
}

console.log(fib_tail(5, 1, 0));

function fib2(n, acc1 = 1, acc2 = 0) {
  if (n <= 0) return 0;
  if (n === 1) return acc1;
  return fib2(n - 1, acc1 + acc2, acc1);
}

console.log("fib2: " + fib2(15));

// not recursive
function fib3(n) {
  let acc1 = 1;
  let acc2 = 0;
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) {
    [acc1, acc2] = [acc1 + acc2, acc1];
  }
  return acc1;
}

console.log("Fib3: " + fib3(5));
