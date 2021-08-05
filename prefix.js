/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let longestWord = "";

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] > longestWord) {
      longestWord = strs[i];
    }
  }

  for (let i = 0; i < strs.length && longestWord.length != 0; i++) {
    if (strs[i] && strs[i].startsWith(longestWord)) {
      continue;
    }
    i--;
    longestWord = longestWord.slice(0, longestWord.length - 1);
  }

  return longestWord;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
