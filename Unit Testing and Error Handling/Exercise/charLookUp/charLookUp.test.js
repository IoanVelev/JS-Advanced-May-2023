const { expect } = require('chai');
const lookupChar = require('./charLookUp');

describe('lookupChar function tests', () => {
    it('returns undefined if first param is number instead of string', () => {
        expect(lookupChar(0, 1)).to.equal(undefined)
    });
    it('returns undefined if both params are not correct', () => {
        expect(lookupChar(0, '1.1')).to.equal(undefined)
    });
    it('returns undefined if second param is float point num instead of integer', () => {
        expect(lookupChar('rock', 1.1)).to.equal(undefined)
    });
    it('returns Incorrect index if index is positive num, but its not in the range of string length', () => {
        expect(lookupChar('rock', 10)).to.equal('Incorrect index')
    });
    it('returns Incorrect index if index is negative num, but its not in the range of string length', () => {
        expect(lookupChar('rock', -1)).to.equal('Incorrect index')
    });
    it('returns the specified char when index is in the range of string length', () => {
        expect(lookupChar('rock', 1)).to.equal('o')
    });
    it('returns the specified char when index is in the range of string length', () => {
        expect(lookupChar('Y', 0)).to.equal('Y')
    });
})