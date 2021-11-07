const mathEnforcer = require('./04mathEnforcer');
const { assert } = require('chai');
const { subtractTen } = require('./04mathEnforcer');

describe('Test mathEnforcer functionality', () => {
    describe('Test addFive method', () => {
        it('Should pass when a number is given',() => {
            assert.notEqual(mathEnforcer.addFive(5), undefined);
        }); 

        it('Should return undefined when data structure except number is given',() => {
            assert.isUndefined(mathEnforcer.addFive([1,2,3]));
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            assert.isUndefined(mathEnforcer.addFive('aloao'));
            assert.isUndefined(mathEnforcer.addFive('aloao'));
            assert.isUndefined(mathEnforcer.addFive({1:1}));
        });

        it('Should add five to the number when valid number is given and return it',() => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.closeTo(mathEnforcer.addFive(1.1 + 2.2), 8.3, 0.01);
            assert.equal(mathEnforcer.addFive(-5), 0);

        });

    });

    describe('Test subtractTen method', () => {
        it('Should pass when a number is given',() => {
            assert.notEqual(mathEnforcer.subtractTen(5), undefined);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        }); 

        it('Should return undefined when data structure except number is given',() => {
            assert.isUndefined(mathEnforcer.subtractTen([1,2,3]));
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            assert.isUndefined(mathEnforcer.subtractTen('aloao'));
            assert.isUndefined(mathEnforcer.subtractTen('aloao'));
            assert.isUndefined(mathEnforcer.subtractTen({1:1}));
        });

        it('Should subtract ten to the number when valid number is given and return it',() => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
            assert.closeTo(mathEnforcer.subtractTen(1.1 + 2.2), -6.7, 0.01);
        });

    });

    describe('Test sum method', () => {
        it('Should pass when a two numbers are given',() => {
            assert.notEqual(mathEnforcer.sum(10,5), undefined);
        }); 

        it('Should return undefined when data structure except number is given',() => {
                assert.isUndefined(mathEnforcer.sum([1,2,3], 5));
                assert.isUndefined(mathEnforcer.sum(5, null));
                assert.isUndefined(mathEnforcer.sum('test', [1,2,3]));
                assert.isUndefined(mathEnforcer.sum('aloao', 'alo'));
        });

        it('Should sum the numbers when valid numbers is given and return the sum',() => {
            assert.equal(mathEnforcer.sum(15, 10), 25);
            assert.closeTo(mathEnforcer.sum(2.2 + 1.3, 1), 4.5, 0.01);
            assert.closeTo(mathEnforcer.sum(2.2 + 1.3, 3.5), 7, 0.01);
            assert.equal(mathEnforcer.sum(-5, -15), -20);
        });

    });
});