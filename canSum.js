const canSum = (n, numbers, value = n, index = 0) => {
  for (index; index < numbers.length; index++) {
    value = value - numbers[index];

    if (value < 0) {
      value += numbers[index];
      continue;
    }
    if (value === 0) return true;

    return canSum(n, numbers, value, index + 1);
  }

  return false;
};

console.log(canSum(7, [2, 3, 1, 100, 123, 123, 1]));
