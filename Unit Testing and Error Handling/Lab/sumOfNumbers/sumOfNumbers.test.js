const { expect } = require('chai');
const sumNums = require('./sumOfNumbers');
describe('Sum of numbers', () => {
    it('should return sum numbers when array length is more than or equal to 2', () => {
        const arr = [1,2,3,4,5];
        expect(sumNums.sum(arr)).to.equal(15)
    });
    
    it('should return sum when array length is equal to 1', () => {
        const arr = [1];
        expect(sumNums.sum(arr)).to.equal(1)
    })
    it('should return NaN when array input isNaN', () => {
        
        const arr = ['hello'];
        expect(isNaN(sumNums.sum(arr))).to.equal(true)
    })
})
