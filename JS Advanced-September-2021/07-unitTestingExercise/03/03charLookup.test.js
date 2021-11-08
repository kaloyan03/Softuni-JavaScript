const lookupChar = require('./03charLookup');
const { assert } = require('chai');

describe('Test char lookup functionality', () => {
    it('It should take string and number(index) as arguments', () => {
        assert.notEqual(lookupChar('test', 3), undefined);
    });

    it('It should return undefined when another data structures except string and integer', () => {
        assert.isUndefined(lookupChar([1,2,3], 5));
        assert.isUndefined(lookupChar('hello', [1,2,3]));
        assert.isUndefined(lookupChar({1:1,2:2,3:3}, 5));
        assert.isUndefined(lookupChar('hello', {1:1, 2:2, 3:3}));
        assert.isUndefined(lookupChar([1,2,3], {1:1,2:2,3:3}));
        assert.isUndefined(lookupChar('hello', 1.5));
    });

    it('Should return character of the string at the given valid index', () => {
        assert.equal(lookupChar('hello', 0), 'h');
        assert.equal(lookupChar('hello', 1), 'e');
        assert.equal(lookupChar('hello', 2), 'l');
        assert.equal(lookupChar('hello', 3), 'l');
        assert.equal(lookupChar('hello', 4), 'o');
    
    });

    it('It should check if index is valid', () => {
        assert.equal(lookupChar('test', 5), 'Incorrect index');
        assert.equal(lookupChar('test', -1), 'Incorrect index');
    });



});