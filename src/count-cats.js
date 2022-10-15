const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const countCats = (matrix) => matrix.reduce((a, b) => a + b.reduce((x, y) => { return y === '^^' ? x + 1 : x}, 0), 0);

module.exports = {
  countCats
};
