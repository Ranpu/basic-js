const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrForPositive = [];
  let result = [];

  arr.forEach(function(value){
    if (value !== -1) arrForPositive.push(value);
  });

  arrForPositive.sort((b, a) => a - b);

  arr.forEach(function(value){
    if (value !== -1) {
      result.push(arrForPositive.pop());
    } else {
      result.push(value);
    }
  })

  return result;
}

module.exports = {
  sortByHeight
};
