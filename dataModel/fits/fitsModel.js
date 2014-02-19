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
			fullImg: null,
			thumbImg: null,
			_dirty: false
		},

		imgConfig: function(){
			var thumbScale = 120 / this.get('image').width;
			return {
				fullImg: {
					scale: 1
				},
				thumbImg: {
					scale: thumbScale,
					width: Math.floor(this.get('image').width * thumbScale),
					height: Math.floor(this.get('image').height * thumbScale)
				}
			}
		},


		updateImages: function(){
			if(this.get('_dirty')){
				var images = ['thumbImg','fullImg'],
					fits = this.toJSON(),
					imgConfig = this.imgConfig();

				_.each(images, _.bind(function(image){
					_.defer(_.bind(function(){
						this.set(image, renderImage({
							fits: fits,
							scale: imgConfig[image].scale,
							width: imgConfig[image].width,
							height: imgConfig[image].height
						}));
					}, this));
				}, this));

				this.set('_dirty', false);
			}
		},

		flagAsDirty: function(){
			this.set('_dirty', true);
		},
		

		readFile: function(){
			readFile(this);
		},


		loaderHide: function(){
			App.vent.trigger('loaderHide');
			this.set('_dirty', true);
		},

		loaderShow: function(){
			App.vent.trigger('loaderShow');
		},

		initialize: function(){

			_.bindAll(this, 'loaderHide', 'updateImages', 'flagAsDirty');

			this.set('id', this.collection.length + 1);
			this.set('label', 'Image ' + this.get('id'));

			this.on('add', this.readFile);
			this.on('add', this.loaderShow);

			this.on('change:imageData', this.loaderHide);
			this.on('change:_dirty', this.updateImages);
		}

	});

});

