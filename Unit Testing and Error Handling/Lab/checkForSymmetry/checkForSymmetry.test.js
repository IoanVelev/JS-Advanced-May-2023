const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');
describe(('Testing checkForSymmetry functions'), () => {
    it('works when numeric array is symmetric and length is even', () => {
        expect(isSymmetric([0,1,1,0])).to.be.true;
    });
    it('works when numeric array is symmetric and length is odd', () => {
        expect(isSymmetric([3,2,3])).to.be.true;
    });
    it('doesnt work when numeric array is assymetric and length is odd', () => {
        expect(isSymmetric([1,2,3])).to.be.false;
    });
    it('works when numeric array is asymmetric and length is even', () => {
        expect(isSymmetric([0,1,0])).to.be.true;
    });
    it('doesnt work when array elements are not with same type', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
    it('works when array with strings is symmetric', () => {
        expect(isSymmetric(['p','o','p'])).to.be.true;
    });
    it('works when array with strings is asymmetric', () => {
        expect(isSymmetric(['A','C','D','C'])).to.be.false;
    });
    it('doesnt work when input is different from array e.g. (66)', () => {
        expect(isSymmetric(66)).to.be.false;
    });
    it('doesnt work when input is string', () => {
        expect(isSymmetric('hello')).to.be.false;
    });
})