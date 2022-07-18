const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s = new Set(s1 + s2);
  for (x of s) {
      if (s1.match(x) && s2.match(x)) {
          let re = new RegExp(x, "g");
          let s1Size = s1.match(re).length;
          let s2Size = s2.match(re).length;
          count += s1Size > s2Size ? s2Size : s1Size;
      }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
