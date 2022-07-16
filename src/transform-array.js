const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr || arr.constructor.name !== 'Array') throw new Error(`'arr' parameter must be an instance of the Array!`);

  let intermediateResult = [];
  let result = [];
  let i = 0;
  
  while (i <= arr.length - 1) {
    switch (arr[i]) {
      case `--discard-next`:
        intermediateResult.push(arr[i]);
        i = i + 1;
        break;
      case `--discard-prev`:
        if (i - 1 > 0) intermediateResult.pop();
        intermediateResult.push(arr[i]);
        break;
      case `--double-next`:
        if (i + 1 <= arr.length - 1) {
          intermediateResult.push(arr[i+1]);
          intermediateResult.push(arr[i])
          break;
        }
        break;
      case `--double-prev`:
        if (i - 1 > 0) intermediateResult.push(intermediateResult[intermediateResult.length - 1]);
        intermediateResult.push(arr[i])
        break;
      default:
        intermediateResult.push(arr[i])
        break;
    }
    i = i + 1;
  }

  intermediateResult.map(a => [`--double-next`, `--double-prev`, `--discard-next`, `--discard-prev`].indexOf(a) === -1 ? result.push(a) : a);

  return result;
}

module.exports = {
  transform
};
