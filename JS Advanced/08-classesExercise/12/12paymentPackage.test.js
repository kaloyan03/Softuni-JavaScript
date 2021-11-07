const PaymentPackage = require('./12paymentPackage');
const { assert } = require('chai');

describe('test PaymentPackage functionality', function() {
    let instance = undefined;
    this.beforeEach(() => {
        instance = new PaymentPackage('test', 15);
    })
    it('Should have set valid parameters when valid parameters were given', () => {
        assert.equal(instance._name, 'test');
        assert.equal(instance._value, 15);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    })

    it('Getters should return valid parameters', () => {
        assert.equal(instance.name, 'test');
        assert.equal(instance.value, 15);
        assert.equal(instance.VAT, 20);
        assert.equal(instance.active, true);
    })

    describe('test name property', () => {
        it('Should throw error when everything except string is given', () => {
            assert.throw(() => {instance.name = ''}, 'Name must be a non-empty string');
            assert.throw(() => {instance.name = 4}, 'Name must be a non-empty string');
        }) 
    })

    describe('test value property', () => {
        it('Should throw error when non-number is given', () => {
            assert.throw(() => {instance.value = 'test'}, 'Value must be a non-negative number');
            assert.throw(() => {instance.value = ['a','b','v']}, 'Value must be a non-negative number');
        }) 

        it('Should throw error when number is negative', () => {
            assert.throw(() => {instance.value = -15}, 'Value must be a non-negative number');
            assert.doesNotThrow(() => {instance.value = 0});
        }) 
    })

    describe('test VAT property', () => {
        it('Should throw error when non-number is given', () => {
            assert.throw(() => {instance.VAT = 'test'}, 'VAT must be a non-negative number');
            assert.throw(() => {instance.VAT = ['a','b','v']}, 'VAT must be a non-negative number');
        }) 

        it('Should throw error when number is negative', () => {
            assert.throw(() => {instance.VAT = -15}, 'VAT must be a non-negative number');
        }) 
    })

    describe('test active property', () => {
        it('Should throw error when non-boolean is given', () => {
            assert.throw(() => {instance.active = 'test'}, 'Active status must be a boolean');
            assert.throw(() => {instance.active = ['a','b','v']},'Active status must be a boolean');
        }) 
    })

    describe('test method toString', () => {
        it('Should return valid message with active prop', () => {
            assert.equal(instance.toString(), `Package: test\n- Value (excl. VAT): 15\n- Value (VAT 20%): 18`)
        })
        
        it('Should return valid message with inactive prop', () => {
            instance.active = false;
            assert.equal(instance.toString(), `Package: test (inactive)\n- Value (excl. VAT): 15\n- Value (VAT 20%): 18`)
        }) 
    })
})