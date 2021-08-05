/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let c = 0;
  nums.sort((a, b) => a - b);

  let currNum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (currNum === nums[i]) c++;
    else currNum = nums[i];
  }

  return c;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
