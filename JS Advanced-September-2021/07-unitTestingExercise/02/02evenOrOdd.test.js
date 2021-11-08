const isOddOrEven = require("./02evenOrOdd");

const { assert } = require('chai');

describe('Test even or odd functionality', () => {
    it('Should fail when other data structures than string is given', () => {
        assert.isUndefined(isOddOrEven([1,2,3]));
        assert.isUndefined(isOddOrEven({1:1, 2:2, 3:3}));
        assert.isUndefined(isOddOrEven(152));
    });

    it('Should pass when string is given', () => {
        assert.notEqual('hello', undefined);
    });

    it('String length should be even', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });

    it('String length should be odd', () => {
        assert.equal(isOddOrEven('hello'), 'odd');
    });
});

