const sum = require('./04sumNumbers');
const { assert } = require('chai');

describe('Sum numbers', () => {
    it('Sum single number', () => {
        input = [1];
        assert.equal(sum(input), 1);
    });

    it('Sum equal numbers', () => {
        input = [1,1];
        assert.equal(sum(input), 2);
    });

    it('Sum different numbers', () => {
        input = [5,4,2];
        assert.equal(sum(input), 11);
    })

})