const memo = {};
let it = 0;

const fib = (n) => {
  if (n <= 2) {
    return 1;
  }

  if (n in memo) return memo[n];

  const res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  it++;
  return res;
};

console.log(fib(1000));
console.log(it);
