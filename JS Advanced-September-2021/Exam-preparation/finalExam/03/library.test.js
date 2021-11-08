const library = require('./library');
const { assert } = require('chai');


describe('test library object', () => {
    describe('test calcPriceOfBook method functionality', () => {
        it('Should throw error when bookName is not string', () => {
            assert.throws(() => {library.calcPriceOfBook(5, 2020)}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook(5.5, 2020)}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook(['test'], 2020)}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook(false, 2020)}, "Invalid input");
        })

        it('Should throw error when year is not integer', () => {
            assert.throws(() => {library.calcPriceOfBook('test', 'aaa')}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook('test', 5.5)}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook('test', ['test'])}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook('test', false)}, "Invalid input");
        })
        
        it('Should throw error when bookName is not string and year is not integer', () => {
            assert.throws(() => {library.calcPriceOfBook(1, 'aaa')}, "Invalid input");
            assert.throws(() => {library.calcPriceOfBook(['test'], 5.5)}, "Invalid input");
        })

        it('Should return message with price discount when year is less or equal 1980', () => {
            assert.equal(library.calcPriceOfBook('Shogun', 1980), `Price of Shogun is 10.00`);
            assert.equal(library.calcPriceOfBook('Shogun', 1979), `Price of Shogun is 10.00`);
        })

        it('Should return message with default price when year is above 1980', () => {
            assert.equal(library.calcPriceOfBook('Shogun', 1981), `Price of Shogun is 20.00`);
            assert.equal(library.calcPriceOfBook('Shogun', 2000), `Price of Shogun is 20.00`);        
        })
    })

    describe('test findBook method functionality', () => {
        it('Should throw error when array length is zero', () => {
            assert.throws(() => {library.findBook([], 'Shogun')}, 'No books currently available');
        })

        it('Should return correct message when desireBook is in the array', () => {
            assert.equal(library.findBook(['The man who smilles', '1984', 'Shogun'], 'Shogun'), 'We found the book you want.');
        })

        it('Should return correct message when desireBook is not in the array', () => {
            assert.equal(library.findBook(['The man who smilles', '1984', 'Shogun'], 'Rich dad poor dad'), 'The book you are looking for is not here!');
        })
    })

    describe('test arrangeTheBooks method functionality', () => {
        it('Should throw error when countBooks is not integer', () => {
            assert.throws(() => {library.arrangeTheBooks(5.5)}, 'Invalid input');
            assert.throws(() => {library.arrangeTheBooks('asd')}, 'Invalid input');
            assert.throws(() => {library.arrangeTheBooks(['test'])}, 'Invalid input');
            assert.throws(() => {library.arrangeTheBooks(false)}, 'Invalid input');
        })
        
        it('Should throw error when countBooks is negative', () => {
            assert.throws(() => {library.arrangeTheBooks(-1)}, 'Invalid input');
        })

        it('Should return correct message when space is enough', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(0), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(20), 'Great job, the books are arranged.');
        })

        it('Should return correct message when space is not enough', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
            assert.equal(library.arrangeTheBooks(100), 'Insufficient space, more shelves need to be purchased.');
        })
    })
})