module.exports = function Images(riot){

	var Image = require('./image');

	this.collection = [];

	riot.observable(this);

	this.on('image:new', function(opts){
		var image = new Image(opts);
		riot.observable(image);
		this.collection.push(image);

		image.on('image:loaded', function(image){
			console.log(image);
		});
	});

}