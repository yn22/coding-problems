const bestSum = (target, numbers, memo = {}) => {
  if (target < 0) return null;
  if (target in memo) return memo[target];
  if (target == 0) return [];

  let minSum;

  for (let n of numbers) {
    const remainder = target - n;

    let res = bestSum(remainder, numbers, memo);

    if (res != null) {
      res = [...res, n];
      if (!minSum || res.length < minSum.length) minSum = res;
    }
  }

  return minSum;
};

console.log(bestSum(7, [4, 2, 3]));
