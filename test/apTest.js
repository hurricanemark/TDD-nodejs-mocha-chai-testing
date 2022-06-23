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
});