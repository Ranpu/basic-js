const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.forEach(function (val, k, array) {
    if (k > 0) {
      val.forEach(function (value, key) {
        if (value !== 0) array[k][key] = array[k - 1][key] === 0 ? 0 : array[k][key];
      });
    };
  });
  return matrix.map(a => a.reduce((x, y) => x + y, 0)).reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
