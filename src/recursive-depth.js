const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let finish_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      let tmp = arr[i];
      if (typeof tmp === 'object') {
        finish_arr = finish_arr.concat(tmp);
        finish_arr.push('there_was_array', 'confirm');

      } else {
        finish_arr.push(tmp);
      } 
    }
    if (finish_arr.length !== arr.length) return 1 + this.calculateDepth(finish_arr);
    return 1;
  }
}

module.exports = {
  DepthCalculator
};
