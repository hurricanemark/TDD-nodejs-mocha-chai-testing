var Chef = function (){
	this.dishes = ['Dosa', 'Tea', 'Pokora', 'Orange chicken'];
	this.customers= 5;
	this.doors = 'Broken';
	this.delivery = true;
};

/*  function checkMenu returns any random dish from the array */
Chef.prototype.checkMenu = function() {
	var dish = this.dishes[Math.floor(Math.random() * this.dishes.length)];
	console.log("I would like to have: ", dish);
	return dish;
};

/* function check custmers if they are being served */
Chef.prototype.customersFed = function (){
	if (this.customers >= 1){
		console.log("Customer fed with good food!");
		this.customers--;
	} else if (this.customers == 0) {
		console.log("All customers ate!");
	} else {
		let custLeft= this.customers;
		console.log("Customer fed with good food!", custLeft, "more to feed");
		this.customers -= custLeft;
	}	

	return this.customers;
};

/* functon checks business availability */
Chef.prototype.closeForRenovation = function(){

	if (this.doors == 'Open') {
		console.log("We are open.");
		return false;
	} else if (this.doors == 'Broken'){
		console.log("Doors are ", this.doors);
		return true;
	} else if (this.doors == 'Closed') {
		console.log('Sorry, we are closed.');
		return true;
	}
};

/* function check business features */
Chef.prototype.foodDelivery = function(){
	console.log("delivery service ", this.delivery);
	 return this.delivery;
};

/* function check menu as an array */
Chef.prototype.isMenuAnArray = function(){
	console.log("#isMenuAnArray", Array.isArray(this.dishes));
	return this.dishes;
};


var chef = new Chef();

module.exports = chef;