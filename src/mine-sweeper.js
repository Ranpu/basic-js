const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  matrix.forEach(function (val, k, arr) {
    val.forEach(function (value, key, array) {
      if (value === false) {
        let kFindMin = k - 1 >= 0 ? k - 1 : 0;
        let kFindMax = k + 1 < arr.length ? k + 1 : k;
        let keyFindMin = key - 1 >= 0 ? key - 1 : 0;
        let keyFindMax = key + 1 < array.length ? key + 1 : key;

        arr[k][key] = 0;

        arr[k][key] = arr[kFindMax][key] === true ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[kFindMin][key] === true ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[k][keyFindMax] === true ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[k][keyFindMin] === true ?
          arr[k][key] + 1 :
          arr[k][key];

        arr[k][key] = arr[kFindMin][keyFindMin] === true && (kFindMin !== k && keyFindMin !== key) ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[kFindMin][keyFindMax] === true && (kFindMin !== k && keyFindMax !== key) ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[kFindMax][keyFindMin] === true && (kFindMax !== k && keyFindMin !== key) ?
          arr[k][key] + 1 :
          arr[k][key];
        arr[k][key] = arr[kFindMax][keyFindMax] === true && (kFindMax !== k && keyFindMax !== key) ?
          arr[k][key] + 1 :
          arr[k][key];
      }
    });
  });

  matrix.forEach(function (val, k, arr) {
    val.forEach(function (value, key) {
      if (value === true) arr[k][key] = 1;
    });
  });
  
  return matrix;
};
module.exports = {
  minesweeper
};
