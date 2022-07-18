const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = String(n).split(``).map(a => Number(a))
  let result = 0;
  for (x in n) {
      let num = Number(n.join('').replace(n[x], ''));
      result = result < num ? num : result; 
  };
  return result;
};

module.exports = {
  deleteDigit
};
