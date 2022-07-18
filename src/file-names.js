const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return names;
  let result = [];
  names.forEach(function (value) {
    if (result.indexOf(value) === -1) {
      result.push(value)
    } else {
      let num = 1;
      while (true) {
        let tmp_value = value + `(${num})`
        if (result.indexOf(tmp_value) === -1) {
          result.push(tmp_value);
          break;
        } else {
          num += 1;
        }
      }
    }
  });
  return result;
}

module.exports = {
  renameFiles
};
