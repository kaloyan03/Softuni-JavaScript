const pizzUni = require('./03');
const { assert } = require('chai');


describe('test pizzUni functionality', () => {
    describe('test makeAnOrder method', () => {
        it('Should throw an error when given object is undefined', () => {
            assert.throws(() => {pizzUni.makeAnOrder({})}, 'You must order at least 1 Pizza to finish the order.');
        })

        it('Should return correct message when only pizza is given', () => {
            let order = {orderedPizza : 'Margarita'};
            assert.equal(pizzUni.makeAnOrder(order), `You just ordered ${order.orderedPizza}`);
        })

        it('Should return correct message when pizza and drink is given', () => {
            let order = {orderedPizza : 'Margarita', orderedDrink: 'Coca Cola'};
            assert.equal(pizzUni.makeAnOrder(order), `You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);
        })
    })

    describe('test getRemainingWork method', () => {
        it('Should return correct message when there is preparing pizza', () => {
            let status = [{'pizzaName': 'Peperoni', 'status': 'ready'}, {'pizzaName': 'Margarita', 'status': 'preparing'}];
            assert.equal(pizzUni.getRemainingWork(status), `The following pizzas are still preparing: Margarita.`);
        })

        it('Should return correct message when there is pizzas preparing', () => {
            let status = [{'pizzaName': 'Peperoni', 'status': 'preparing'}, {'pizzaName': 'Margarita', 'status': 'preparing'}];
            assert.equal(pizzUni.getRemainingWork(status), `The following pizzas are still preparing: Peperoni, Margarita.`);
        })

        it('Should return correct message when pizzas are ready', () => {
            let status = [{'pizzaName': 'Peperoni', 'status': 'ready'}, {'pizzaName': 'Margarita', 'status': 'ready'}];
            assert.equal(pizzUni.getRemainingWork(status), 'All orders are complete!');
        })
    })

    describe('test orderType method', () => {
        it('Should get discount when order is carry out', () => {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90);
        })

        it('Shouldn\'t get discount when order is delivery', () => {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
        })
    })
})