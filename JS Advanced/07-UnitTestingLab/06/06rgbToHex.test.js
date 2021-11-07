const rgbToHexColor = require('./06rgbToHex');
const { assert } = require('chai');

describe('Test rgbToHexColor', () => {
    it('Should pass with different numbers in the boundaries', () => {
        assert.equal(rgbToHexColor(12,13,15), '#0C0D0F');
    });

    it('Should pass with same in the boundaries', () => {
        assert.equal(rgbToHexColor(15,15,15), '#0F0F0F');
    });

    it('Should fail when red number is outside the boundaries with negative value', () => {
        assert.equal(rgbToHexColor(-3,15,15), undefined);
    });

    it('Should fail when red number is outside the boundaries with positive value', () => {
        assert.equal(rgbToHexColor(300,15,15), undefined);
    });

    it('Should fail when green number is outside the boundaries with negative value', () => {
        assert.equal(rgbToHexColor(12,-3,15), undefined);
    });

    it('Should fail when green number is outside the boundaries with positive value', () => {
        assert.equal(rgbToHexColor(12,300,15), undefined);
    });

    it('Should fail when blue number is outside the boundaries with negative value', () => {
        assert.equal(rgbToHexColor(12,15,-3), undefined);
    });

    it('Should fail when blue number is outside the boundaries with positive value', () => {
        assert.equal(rgbToHexColor(12,15,300), undefined);
    });

    it("Should fail when type of green isn't number", () => {
        assert.isUndefined(rgbToHexColor(11, 'green', 13));
    });

    it("Should fail when type of blue isn't number", () => {
        assert.isUndefined(rgbToHexColor(11, 12, 'blue'));
    });

    it("Should have two numbers when one number is given", () => {
        assert.equal(rgbToHexColor(0,0,0), '#000000');
    });

    it("Should have two numbers when one number is given with another two numbers", () => {
        assert.equal(rgbToHexColor(0,12,34), '#000C22');
    });

    it('Should fail when invalid input is given', () => {
        assert.isUndefined(rgbToHexColor([1,2,3]));
        assert.isUndefined(rgbToHexColor({1: 1, 2:2, 3:3}));
        assert.isUndefined(rgbToHexColor('red', 12, 13));

    });

    it('Should pass and convert rgb(126, 122, 191) into #7e7abf', () => {
        assert.equal(rgbToHexColor(126, 122, 191), '#7E7ABF');
    });
    
    it('Should return values with upper case', () => {
        assert.notEqual(rgbToHexColor(126, 122, 191), '#7e7abf');
    });

    it('Should convert white to hex', () => {
        assert.equal(rgbToHexColor(255, 255,255), '#FFFFFF');
    })
});
