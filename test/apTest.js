const assert = require('chai').assert;
const { expect, AssertionError } = require('chai');
const Chef = require('../app');

describe('Chef test', function() {
	let chef = Chef;

	// it.skip('check if the restaurant is safe:');

	it('check the dish for valid name,', function(){
		assert.isString(chef.checkMenu(), 'string');
	});

	it('check for a dish in menu.', function() {
		var dish = chef.checkMenu();
		assert.oneOf(dish, chef.dishes);	
	});

	it('make sure the chef can feed more.', function(){
		for (var i=0; i<6; i++){
			chef.customersFed();
			assert.isAtLeast(chef.customers, 0);
		}
	});

	it('check if restaurant is closed', function(){
		var restaurant = chef.closeForRenovation();
		assert.isTrue(restaurant, chef.doors);
	});

	it('check if the restaurant is safe:', () => {
		var restaurant = chef.closeForRenovation();
		chef.doors = "Broken";
		// console.log(chef.doors);
		assert.isTrue(restaurant, chef.doors);
	});

	it('#foodDoordash', function(){
		var restaurant = chef.foodDelivery();
		assert.isBoolean(restaurant, chef.delivery);
	});
	
	it('#isMenuAnArray', function(){
		var menu = chef.isMenuAnArray();
		assert.isArray(menu, chef.dishes); 
	});

	it('#menuItemHasChicken', () => {
		expect(chef.dishes).to.include('Orange chicken');
	});

	it('#menuLength', () => {
		expect(chef.dishes).to.have.lengthOf(4);
	});

	it('#isEmptyArray, #foobar', () => {
		assert('foo' !== 'bar', 'foo is not bar');
		assert(Array.isArray([]), 'empty arrays are arrays');
	});

	/* Asserts that object is truthy */
	it('#isOK', () => {
		assert.isOk('everything', 'everything is ok');
		// assert.isOk(false, 'this will fail');
	});

	/* Assert that object is falsy */
	it('#isNotOk', () => {
		// assert.isNotOk('everything', 'this will fail');
		assert.isNotOk(false, 'this will pass');
	});

	/* Asserts equal, notEqual */
	it('#equal, #notEqual', () => {
		assert.equal(3, '3', '== coerces values to strings');
		assert.notEqual(3, 4, 'these numbers are not equal');
	});




	
});