const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    'chain': [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        value = String(value)
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || 1 > position || position > this.chain.length) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        } else {
            this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position));
            return this;
        }
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let chain = this.chain;
        this.chain = [];
        return chain.join(`~~`)
    }
};

module.exports = {
    chainMaker
};
