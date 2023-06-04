const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer function tests', () => {
    describe('addFive function tests', () => {
        it('returns undefined when input is string', () => {
            expect(mathEnforcer.addFive('hello')).to.equal(undefined)
        });
        it('returns undefined when input is undefined', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined)
        });
        it('returns undefined when input is undefined', () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined)
        });
        it('returns undefined when input is undefined', () => {
            expect(mathEnforcer.addFive({})).to.equal(undefined)
        });
        it('returns undefined when input is null', () => {
            expect(mathEnforcer.addFive(null)).to.equal(undefined)
        });
        it('returns result with successfully added positive number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6)
        });
        it('returns result with successfully added floating point number', () => {
            expect(mathEnforcer.addFive(1.5)).to.equal(6.5)
        });
        it('returns result with successfully added negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        });
    });
    describe('subtractTen function tests', () => {
        it('returns undefined when input is string', () => {
            expect(mathEnforcer.subtractTen('hello')).to.equal(undefined)
        });
        it('returns undefined when input is string', () => {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined)
        });
        it('returns undefined when input is string', () => {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined)
        });
        it('returns undefined when input is undefined', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined)
        });
        it('returns undefined when input is null', () => {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined)
        });
        it('returns result with successfully subtracted positive number', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1)
        });
        it('returns result with successfully subtracted negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        });
        it('returns result with successfully subtracted floating point number', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5)
        });
    });
    describe('sum function tests', () => {
        it('returns undefined where second input is string', () => {
            expect(mathEnforcer.sum(1, 'hello')).to.equal(undefined)
        });
        it('returns undefined where first input is string', () => {
            expect(mathEnforcer.sum('hello', 1)).to.equal(undefined)
        });
        it('returns undefined when inputs are undefined', () => {
            expect(mathEnforcer.sum(undefined,undefined)).to.equal(undefined)
        });
        it('returns undefined when inputs are null', () => {
            expect(mathEnforcer.sum(null, null)).to.equal(undefined)
        });
        it('returns result with successfully summed positive numbers', () => {
            expect(mathEnforcer.sum(1,1)).to.equal(2)
        });
        it('returns result with successfully summed integer and floating point num', () => {
            expect(mathEnforcer.sum(1,1.1)).to.equal(2.1)
        })
        it('returns result with successfully summed numbers where one is positive and other is negative', () => {
            expect(mathEnforcer.sum(1,-1)).to.equal(0)
        });
        it('returns result with successfully summed negative floating point numbers', () => {
            expect(mathEnforcer.sum(-2.5,-2.5)).to.equal(-5)
        });
        it('returns result with successfully summed negative numbers', () => {
            expect(mathEnforcer.sum(-2.5,-5)).to.equal(-7.5)
        });
        it('returns result with successfully summed negative floating point number and positive integer', () => {
            expect(mathEnforcer.sum(-2.5,5)).to.equal(2.5)
        });
        it('returns result with successfully summed negative numbers', () => {
            expect(mathEnforcer.sum(-1,-1)).to.equal(-2)
        });
        it('returns result with successfully summed floating point numbers', () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2)
        });
    });
})