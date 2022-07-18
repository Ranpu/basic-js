const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;
  let result = '';
  let last = str[0];
  let index = 0;

  while (str.length >= 1) {
    if (str[index] === last) {
      index += 1;
    } else {
      result += str.slice(0, index).length > 1 ? String(str.slice(0, index).length) + last : last;
      last = str[index];
      str = str.slice(index);
      index = 0;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
