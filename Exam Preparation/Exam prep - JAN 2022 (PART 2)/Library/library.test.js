const { expect } = require('chai');
const library = require('./library');

describe("Tests", () => {
    describe("calcPriceBook tests",() => {
        it("throws error when input is invalid", function() {
            expect(() => library.calcPriceOfBook(1,1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('little prince', '1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, '1')).to.throw('Invalid input');
        });
        it('returns 50 % of the price when year is before 1980', () => {
            expect(library.calcPriceOfBook('little prince', 1943)).to.equal(`Price of little prince is 10.00`);
        });
        it('returns 50 % of the price when year is 1980', () => {
            expect(library.calcPriceOfBook('little prince', 1980)).to.equal(`Price of little prince is 10.00`);
        });
        it('returns message when year is after 1980', () => {
            expect(library.calcPriceOfBook('little prince', 1981)).to.equal(`Price of little prince is 20.00`);
        });
     });
     describe('findBook tests', () => {
        it('throws error when array is empty', () => {
            expect(() => library.findBook([], 'Moby Dick')).to.throw('No books currently available');
        });
        it('returns message when array includes desiredBook', () => {
            expect(library.findBook(['Moby Dick', 'Anna Karenina', 'Harry Potter'], 'Moby Dick')).to.equal('We found the book you want.');
        });
        it('returns message when array doesnt include desiredBook', () => {
            expect(library.findBook(['Red Hat', 'Anna Karenina', 'Harry Potter'], 'Moby Dick')).to.equal('The book you are looking for is not here!');
        });
     });
     describe('arrangeTheBooks tests', () => {
        it('throws error if input is not an integer', () => {
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
        });
        it('throws error if input is negative number', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });
        it('return message when input is valid', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('return message when input is valid but space is insufficient', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
     })
});
