/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let copyArr = [...candies];
  let max = copyArr.sort((a, b) => a - b)[candies.length - 1];

  return candies.map((el) => el + extraCandies >= max);
};

console.log(kidsWithCandies([1, 10, 10, 3], 1));
