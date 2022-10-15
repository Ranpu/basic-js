const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  };

  encrypt(message = null, key = null) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];

    key = key.toUpperCase();
    message = message.toUpperCase();

    while (key.length <= message.length) {
      key += key;
    };

    for (let i = 0; i < message.length; i++) {
      let symM = message[i];
      let symK = key[i];

      if (symM.match(/[A-Z]/gm)) {
        let addr = ((abc.length + abc.search(symM) + abc.search(symK)) % abc.length);
        result.push(abc[addr % abc.length]);
      } else {
        result.push(symM);
        key = key.slice(0, i) + symM + key.slice(i);
      }
    }

    return this.reverse ? result.join('') : result.reverse().join('');
  };

  decrypt(message = null, key = null) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];

    key = key.toUpperCase();
    message = message.toUpperCase();

    while (key.length <= message.length) {
      key += key;
    };

    for (let i = 0; i < message.length; i++) {
      let symM = message[i];
      let symK = key[i];

      if (symM.match(/[A-Z]/gm)) {
        let addr = ((abc.length + abc.search(symM) - abc.search(symK)) % abc.length);
        result.push(abc[addr % abc.length]);
      } else {
        result.push(symM);
        key = key.slice(0, i) + symM + key.slice(i);
      }
    }

    return this.reverse ? result.join('') : result.reverse().join('');
  };
};

module.exports = {
  VigenereCipheringMachine
};
