const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let incorrect_type = typeof sampleActivity === 'string';
  let incorrect_number = Number(sampleActivity) > 0 && Number(sampleActivity) < 15 && Number(sampleActivity) !== NaN;
  if (!incorrect_type || !incorrect_number) return false;


  let time = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (LN_2 / HALF_LIFE_PERIOD);
  return time - Math.floor(time) === 0 ? time : Math.floor(time) + 1;
}

module.exports = {
  dateSample
};
