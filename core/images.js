module.exports = function Images(riot){

	var Image = require('./image');

	this.collection = [];
	this.active = null;

	riot.observable(this);

	this.on('image:new', function(opts){

		//Create new Image model
		var image = new Image(opts, this);

		//Make it an event emmiter
		riot.observable(image);

		//Add it to the collection
		this.collection.push(image);

		//setActiveImage
		this.active = image;

	}.bind(this));

}