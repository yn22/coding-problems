const gridTraveler = (startM, startN, endN, endM, memo = {}) => {
  if (memo[startN + "," + startM]) {
    return memo[startN + "," + startM];
  }
  if (startN < endN || startM < endM) return 0;
  if (startN == endN && startM == endM) return 1;

  let count = 0;

  count += gridTraveler(startM - 1, startN, endN, endM, memo);
  count += gridTraveler(startM, startN - 1, endN, endM, memo);

  if (count > 0) {
    memo[startN + "," + startM] = count;
    memo[startM + "," + startN] = count;
  }

  return count;
};

console.log(gridTraveler(1000, 1000, 1, 1));
