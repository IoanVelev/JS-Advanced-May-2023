const { expect } = require('chai');
const createCalculator = require('./addAndSubtract');

describe('Calculator', () => {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero if get method is called before add or subtract methods', () => {
        expect(calc.get()).to.equal(0)
    });

    it('can add numbers', () => {
        calc.add(1)
        expect(calc.get()).to.equal(1)
    });
    it('can subtract numbers', () => {
        calc.subtract(1)
        expect(calc.get()).to.equal(-1)
    });
    it('can add numbers as string', () => {
        calc.add('1')
        expect(calc.get()).to.equal(1)
    });
    it('can subtract numbers as string', () => {
        calc.subtract('1')
        expect(calc.get()).to.equal(-1)
    });
})