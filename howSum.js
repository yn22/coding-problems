const howSum = (target, numbers, memo = {}) => {
  if (target === 0) return [];

  if (target in memo) return memo[target];

  if (target < 0) {
    memo[target] = null;
    return null;
  }

  for (let n of numbers) {
    const remainder = target - n;
    const remainderResult = howSum(remainder, numbers, memo);

    if (remainderResult) {
      memo[target] = [...remainderResult, n];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

console.time();
console.log(howSum(8, [1, 4, 5]));

console.timeEnd();
