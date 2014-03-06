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
				minRaw: 0,
				maxRaw: 19369, //this is a little hack to init the non-linear slider in the right place on init.
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
				var fits = this.toJSON(),
					imgConfig = this.imgConfig(),
					count = 0;

				_.each(imgConfig, _.bind(function(value, key, list){

					var callback = (function(img){
						this.set(key, img);

						if(count === _.size(list) - 1){
							_.defer(_.bind(function(){ this.set('_dirty', false); }, this));
							count = 0;
						}else{
							count++;
						}

					}).bind(this);

					renderImage({
						fits: fits,
						scale: value.scale,
						width: value.width,
						height: value.height,
						callback: callback
					});

				}, this));

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

