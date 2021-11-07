/*
Return a module (object), containing the functions add(), subtract() and get() as properties
Keep an internal sum that can’t be modified from the outside
The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
The function get() returns the value of the internal sum
*/

const createCalculator = require('./07addSubtract');
const { assert } = require('chai');


describe('Test createCalculator functionality', () => {
    it('Should return object', () => {
        calc = createCalculator();
        assert.equal(typeof calc, 'object');
    });

    it('Should have method add', () => {
        calc = createCalculator();
        assert.equal(typeof calc['add'], 'function');
    });

    it('Should have method subtract', () => {
        calc = createCalculator();
        assert.equal(typeof calc['subtract'], 'function');
    });

    it('Should have method get', () => {
        calc = createCalculator();
        assert.equal(typeof calc['get'], 'function');
    });

    it("Internal sum should't be modified", () => {
        assert.equal(createCalculator().sum, undefined);
    }); 

    it(`Add method adds parsable input`, () => {
        const calc = createCalculator()
        calc.add('1')
        assert.equal(calc.get(), 1);
    });

    it(`subtract method subtracts parsable input`, () => {
        const calc = createCalculator()
        calc.add('2')
        calc.subtract('1')
        assert.equal(calc.get(), 1);

    });

    it(`Should return undefined when string is given to method add`, () => {
        const calc = createCalculator()
        assert.equal(console.log(calc.add('Hello')), undefined);
    });

    it(`Should return undefined when string is given to method subtract`, () => {
        const calc = createCalculator()
        assert.equal(console.log(calc.subtract('Hello')), undefined);
    });

});
