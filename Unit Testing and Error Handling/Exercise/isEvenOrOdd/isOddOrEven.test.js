const { expect } = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('isOddOrEven function tests', () => {
    it('returns undefined if param is number', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it('returns undefined if param is array', () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });
    it('returns undefined if param is object', () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });
    it('returns undefined if param is undefined', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
    });
    it('returns undefined if param is null', () => {
        expect(isOddOrEven(null)).to.equal(undefined);
    });
    it('returns undefined if param is boolean', () => {
        expect(isOddOrEven(Boolean)).to.equal(undefined);
    });
    it('returns even', () => {
        expect(isOddOrEven('ACDC')).to.equal('even');
    });
    it('returns odd', () => {
        expect(isOddOrEven('UFC')).to.equal('odd');
    });
})