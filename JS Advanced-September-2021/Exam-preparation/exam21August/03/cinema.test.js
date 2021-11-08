const cinema = require('./cinema');
const { assert } = require('chai');


describe('test cinema functionality', () => {
    describe('test showMovies method', () => {
        it('Should return correct message when array length is equal zero', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        })

        it('Should return array joined by comma and space when length is above zero', () => {
            assert.equal(cinema.showMovies(['Superman', 'Wonderwoman']), 'Superman, Wonderwoman');
        })

        it('Should return one item of the array when array lenght equals 1', () => {
            assert.equal(cinema.showMovies(['Superman']), 'Superman');
        })

    })

    describe('test ticketPrice method', () => {
        it('Should throw an error when projection type given is not in schedule', () => {
            assert.throws(() => {cinema.ticketPrice('test')}, 'Invalid projection type.');
        })

        it('Should throw an error when projection type is undefined', () => {
            assert.throws(() => {cinema.ticketPrice()}, 'Invalid projection type.');
        })

        it('Should return correct price when projection type is premiere', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
        })

        it('Should return correct price when projection type is normal', () => {
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
        })

        it('Should return correct price when projection type is discount', () => {
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        })
    })

    describe('test sweapSeatsInHall method', () => {
        it('Should not sweap seats when firstPlace is not integer', () => {
            assert.equal(cinema.swapSeatsInHall('asd', 5), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall([1,2], 5), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(true, 5), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall({1:2}, 5), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace is not integer', () => {
            assert.equal(cinema.swapSeatsInHall(5,'asd'), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(5, [1,2]), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(5, true), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(5, {1:2}), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace and firstPlace is not integer', () => {
            assert.equal(cinema.swapSeatsInHall('aa','asd'), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall([1,2,3], [1,2]), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(false, true), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall('asd', {1:2}), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace is negative number', () => {
            assert.equal(cinema.swapSeatsInHall(-1, 5), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace equals zero', () => {
            assert.equal(cinema.swapSeatsInHall(0, 5), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace is negative number', () => {
            assert.equal(cinema.swapSeatsInHall(5, -1), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace equals zero', () => {
            assert.equal(cinema.swapSeatsInHall(5, 0), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace and secondPlace equals zero', () => {
            assert.equal(cinema.swapSeatsInHall(0, 0), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace and secondPlace are negative numbers', () => {
            assert.equal(cinema.swapSeatsInHall(-1, -1), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace is above 20 and secondPlace is valid', () => {
            assert.equal(cinema.swapSeatsInHall(21, 5), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace is above 20 and firstPlace is valid', () => {
            assert.equal(cinema.swapSeatsInHall(5, 21), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace and firstPlace is above 20', () => {
            assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when secondPlace is above 20 and firstPlace is negative or equal zero', () => {
            assert.equal(cinema.swapSeatsInHall(-1, 21), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(0, 21), "Unsuccessful change of seats in the hall.");
        })

        it('Should not sweap seats when firstPlace is above 20 and secondPlace is negative or equal zero', () => {
            assert.equal(cinema.swapSeatsInHall(21, -1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(21, 0), "Unsuccessful change of seats in the hall.");
        })

        it('Should not swap seats when first seat and second are equal', () => {
            assert.equal(cinema.swapSeatsInHall(20, 20), "Unsuccessful change of seats in the hall.");
        })

        it('Should swap seats when first place is above zero and below 21, secondPlace too', () => {
            assert.equal(cinema.swapSeatsInHall(20, 5), "Successful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(5, 20), "Successful change of seats in the hall.");
        })
    })
})