define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./tmpl',
	'mods/utils/renderImage',
	'ionSlider'
], function($, _, Backbone, Marionette, App, tmpl, renderImage, ionSlider){

	var ScaleView = Backbone.Marionette.ItemView.extend({

		template: tmpl,
		id: 'scale',
		className: 'panel scale',

		ui: {
			minMax: '#minMax',
			scale: '#scale',
			canvas: 'canvas'
		},

		events: {
			'change #scale': 'updateScale',
			'click #done': 'done'
		},

		done: function(e){
			
			if(this.model.get('options') !== this.previousOptions){
				this.model.set('_dirty', true);
			};

			window.history.back();
		},

		updateMinMax: function(e){
			var options = _.clone(this.model.get('options'));
			options.min = e.fromNumber;
			options.max = e.toNumber;
			this.model.set('options', options);
			this.renderImage();

		},

		updateScale: function(e){
			var options = _.clone(this.model.get('options'));
			options.scaleType = e.target.value;
			this.model.set('options', options);
			
			this.renderImage();
		},


		renderImage: function(){
			var fits = this.model.toJSON();

			var preview = renderImage({
					fits: fits,
					scale: this.imageScale,
					width: this.width,
					height: this.height
				});

			this.context.drawImage(preview, 0, 0);
		},

		initSlider: function(){
			var options = this.model.get('options');
			this.ui.minMax.ionRangeSlider({
				type: 'double',
				min:  0,
				max: 65535,
				from: options.min,
				to: options.max,
				onChange: this.updateMinMax
			});
		},

		onRender: function(){
			if(this.model.get('imageData')){

				var fits = this.model,
					fitsImage = this.model.get('image');
				
				this.imageScale = 0.2;
				this.width = Math.floor(fitsImage.width * this.imageScale);
				this.height = Math.floor(fitsImage.height * this.imageScale);

				this.context = this.ui.canvas[0].getContext('2d');

				
				if(!fits.get('options')){
					fits.set('options', {
						min: 0,
						max: 65535,
						scaleType: this.ui.scale.val()
					});
				}

				this.ui.canvas.attr('width', this.width);
				this.ui.canvas.attr('height', this.height);

				_.defer(this.initSlider);
				_.defer(_.bind(function(){
					this.ui.minMax.trigger('change');
				}, this));

				this.renderImage();

			}
			
		},


		initialize: function(){
			_.bindAll(this, 'updateMinMax', 'updateScale', 'renderImage', 'done', 'initSlider');
			this.previousOptions = _.clone(this.model.get('options'));
		}

	});

	return ScaleView;

});