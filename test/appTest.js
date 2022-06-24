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

	/* Assert that object is falsy 
	.isNotOk(object, [message])
	*/
	it('#isNotOk', () => {
		// assert.isNotOk('everything', 'this will fail');
		assert.isNotOk(false, 'this will pass');
	});

	/* Asserts equal, notEqual 
	.equal(actual, expected, [message])
	.notEqual(actual, expected, [message])
	*/
	it('#equal, #notEqual', () => {
		assert.equal(3, '3', '== coerces values to strings');
		assert.notEqual(3, 4, 'these numbers are not equal');
	});

	/*
	.fail([message])
	.fail(actual, expected, [message], [operator])
	*/
	it('#fail', () => {
		assert.fail();
		assert.fail('Input error!');
		assert.fail(1,2);
		assert.fail(1,2, "customer error message", ">");
		assert.fail(1,2, undefined, ">");
	});

	/*
		.strictEqual(actual, expected, [message])
		.notStrictEqual(actual, expected, [message]) -->Asserts strict inequality (!==) of actual and expected.
		.deepEqual(actual, expected, [message]) --> actual is deeply equal to expect
	*/
	it('#strictEqual, #notStrictEqual, #deepEqual, #notDeepEqual', () => {
		assert.strictEqual(true, true, 'these booleans are strictly equal');
		assert.strictEqual("Emily", "Emily", 'these strings are strictly equal');
		assert.notStrictEqual('cat', 'dog', 'no coercion for strict equality');
		assert.deepEqual({ tea: 'green' }, { tea: 'green' });
		assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	});

	/*
	Asserts valueToCheck is strictly greater than (>) valueToBeAbove
	Asserts valueToCheck is strictly less than (<) valueToBeBelow
		.isAbove(valueToCheck, valueToBeAbove, [message])
		.isBelow(valueToCheck, valueToBeBelow, [message])
	*/
	it('#isAbove, #isBelow', () => {
		assert.isAbove(5,2, '5 is strictly greater than 2');
		assert.isBelow(4,9, '4 is strictly less than 9');
	});

	/*
	Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast
		.isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	*/
	it ('#isAtLeast', () => {
		assert.isAtLeast(5, 2, '5 is greater or equal to 2');
		assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	});
	
	/*
	Asserts valueToCheck is less than or equal to (<=)
		.isAtMost(valueToCheck, valueToBeAtMost, [message])
		
	*/
	it('#isAtMost', () => {
		assert.isAtMost(3,6,'3 is less than or equal to 6');
		assert.isAtMost(4, 4, '4 is less than or equal to 4');
	});

	/*
	Asserts that value is true.
		.isTrue(value, [message])

	*/
	it('#isTrue, #isFalse, #isNotTrue, #isNotFalse', () => {
		var teaServed = true;
		var tea = 'tasty chai';
		assert.isTrue(teaServed, 'the tea has been served');
		assert.isNotTrue(tea, 'great, time for tea!');

		teaServed = false;
		assert.isFalse(teaServed, 'no tea yet? hmm...');
		tea = 'tasty chai';
		assert.isNotFalse(tea, 'great, time for tea!');
	});

	/*
	Asserts that value is null.
		.isNull(value, [message])

	Asserts that value is not null.
		.isNotNull(value, [message])

	*/
	it('#isNull, #isNotNull', () => {
		var tea = 'tasty chai';
		var err = null;
		assert.isNull(err, 'there was no error');
		assert.isNotNull(tea, 'great, time for tea!');
	});

	/*
	Asserts that value is NaN.
		.isNaN
	Asserts that value is not NaN.
		.isNotNaN
	*/
	it('#isNaN, #isNotNaN', () => {
		assert.isNaN(NaN, 'NaN is NaN');
		assert.isNotNaN(4, '4 is not NaN');
	});


	/*
	Asserts that the target is neither null nor undefined.
		.exists

	Asserts that the target is either null or undefined.
		.notExists

	*/
	it('#exists, #notExists', () => {
		var foo = 'hi';
		var bar = null, baz;
		assert.exists(foo, 'foo is neither `null` nor `undefined`');
		assert.notExists(bar);
		assert.notExists(baz, 'baz is either null or undefined');
	});

	/*
	Asserts that value is undefined.
		.isUndefined(value, [message])
	Asserts that value is not undefined.
		.isDefined(value, [message])
	*/
	it('#isDefined, #isUndefined', () => {
		var tea;
		assert.isUndefined(tea, 'no tea defined');
		tea = 'cup of chai';
		assert.isDefined(tea, 'tea has been defined');
	});

	/*
	Asserts that value is a function.
		.isFunction(value, [message])

	Asserts that value is not a function.
		.isNotFunction(value, [message])
	*/
	it('#isFunction, #isNotFunction', () => {
		function serveTea() { return 'cup of tea'; };
		assert.isFunction(serveTea, 'great, we can have tea now');
		var serveTea = [ 'heat', 'pour', 'sip' ];
		assert.isNotFunction(serveTea, 'great, we have listed the steps');
	});


	/*
	Asserts that value is an object of type ‘Object’ (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.
		.isObject(value, [message])

	Asserts that value is not an object of type ‘Object’ (as revealed by Object.prototype.toString).
		.isNotObject(value, [message])
	*/
	it('#isObject, #isNotObject', () => {
		var selection = { name: 'Chai', serve: 'with spices' };
		assert.isObject(selection, 'tea selection is an object');
		selection = 'chai';
		assert.isNotObject(selection, 'tea selection is not an object');
		assert.isNotObject(null, 'null is not an object');
	});


	/*
	Asserts that value is an array.
		.isArray(value, [message])

	Asserts that value is not an array.
		.isNotArray(value, [message])
	*/
	it('#isArray, #isNotArray', () => {
		var menu = [ 'green', 'chai', 'oolong' ];
		assert.isArray(menu, 'what kind of tea do we want?');
		var menue = 'green|chai|oolong';
		assert.isNotArray(menue, 'what kind of tea do we want?');
	});

});