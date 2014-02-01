define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/utils/readFile',
	'mods/utils/renderImage',
], function($, _, Backbone, Marionette, App, readFile, renderImage){

	return Backbone.Model.extend({
		
		idAttribute: 'id',

		defaults: {
			file: null,
			label: null,
			imageData: null,
			header: null,
			image: null,
			options: {
				min: 0,
				max: 500,
				scaleType: 'linear'
			},
			colour: {},
			fullImg: null,
			colourImg: null,
			_dirty: false
		},


		getFullImage: function(){
			var img = this.get('fullImg');
			
			if(!img || this.get('_dirty')){
				img = renderImage({
					fits: this.toJSON(),
					scale: 1
				});	
				this.set('fullImg', img);
				this.set('_dirty', false);
			}

			return img;

		},
		

		readFile: function(){
			readFile(this);
		},


		loaderHide: function(){
			App.vent.trigger('loaderHide');
		},

		loaderShow: function(){
			App.vent.trigger('loaderShow');
		},

		initialize: function(){

			this.set('id', this.collection.length + 1);
			this.set('label', 'Image ' + this.get('id'));

			this.on('add', this.readFile);
			this.on('add', this.loaderShow);

			this.on('change:imageData', this.loaderHide);
		}

	});

});

