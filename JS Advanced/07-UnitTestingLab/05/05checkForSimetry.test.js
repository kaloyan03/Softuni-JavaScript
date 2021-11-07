const isSymmetric = require("./05checkForSimetry");
const { assert } = require('chai');

describe('Tests if array is symmetric', () => {
    it('Array is symmetric', () => {
        input = [1, 2, 1];
        assert.equal(isSymmetric(input), true);
    });

    it('Takes data structures except array', () => {
        assert.equal(isSymmetric(1), false);
        assert.equal(isSymmetric('asd'), false);
        assert.equal(isSymmetric({hello: 'hello'}), false);
        assert.equal(isSymmetric(NaN), false);
    });
    
    it('Takes array as argument', () => {
        assert.equal(isSymmetric([]), true);
    });

    it('Takes array with single number', () => {
        assert.equal(isSymmetric([1]), true);
    });

    it('Array is not symmetric', () => {
        assert.equal(isSymmetric([1, 2 ,2 ,3 ,3]), false);
    });

    it('Should fail when array with string and number is provided', () => {
        assert.equal(isSymmetric(['1', 1]), false);
    });


    
});  