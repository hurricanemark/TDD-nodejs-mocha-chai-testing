const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator')

describe('calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equaled to 2', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
	})
})