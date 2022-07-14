const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString') || date.constructor.name !== 'Date') throw new Error('Invalid date!');
  
  
  month = date.getMonth();
  if ((0 <= month && month <= 1) || month == 11) {
    return 'winter';
  } else if (1 < month && month <= 4) {
    return 'spring';
  } else if (4 < month && month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
