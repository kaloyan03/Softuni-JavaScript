const { assert } = require('chai');
let numberOperations = require('./03. Number Operations_Resources');

describe('test numberOperations function functionality', () => {
    describe('test pow method', () => {
        it('Should return correct value when number is given', () => {
            assert.equal(numberOperations.powNumber(5), 25);
            assert.equal(numberOperations.powNumber(5.5), 30.25);
            assert.equal(numberOperations.powNumber('5'), 25);
        })

        it('Should return NaN when another structor except number is given', () => {
            assert.isNaN(numberOperations.powNumber('asd'));
        })
    })

    describe('test numberChecker method', () => {
        it('Should throw error when input is not a number', () => {
            assert.throws(() => { numberOperations.numberChecker('asd') }, 'The input is not a number!');
            assert.throws(() => { numberOperations.numberChecker(['asd']) }, 'The input is not a number!');
        })

        it('Should return correct message when number is lower than 100', () => {
            assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.notEqual(numberOperations.numberChecker(100), 'The number is lower than 100!');
        })

        it('Should return correct message when number is greater or equal 100', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
            assert.notEqual(numberOperations.numberChecker(99), 'The number is greater or equal to 100!');
        })
    })

    describe('test sumArrays method', () => {
        it('should return correct array when second array is longer than the first', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4, 5, 6]), [3, 5, 7, 5, 6]);

        })

        it('should return correct array when first array is longer than the second', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3,4,5], [2, 3, 4]), [ 3, 5, 7, 4, 5 ]);
        })

        it('should return correct array when arrays are equal', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [ 3, 5, 7 ]);
        })

        
    })

})