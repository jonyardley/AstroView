define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./tmpl',
	'mods/renderImage/renderImage',
	'ionSlider'
], function($, _, Backbone, Marionette, App, tmpl, renderImage, ionSlider){

	var ScaleView = Backbone.Marionette.ItemView.extend({

		template: tmpl,
		id: 'scale',
		className: 'panel scale',

		ui: {
			minMax: '#minMax',
			scale: '#scale',
			fullRange: '#fullRange'
		},

		events: {
			'change #scale': 'updateScale',
			'click #done': 'done',
			'click #fullRange': 'updateFullRange',
		},

		done: function(e){
			App.Router.navigate('/',{replace: true, trigger: true});
		},

		updateMinMax: function(e){
			var options = this.model.get('options');
			options.min = e.fromNumber;
			options.max = e.toNumber;

			this.renderImage();
		},

		updateScale: function(e){
			var options = this.model.get('options');
			options.scaleType = e.target.value;
			
			this.renderImage();
		},

		updateFullRange: function(e){
			var checked = e.target.checked;
			this.ui.minMax.ionRangeSlider("update", {
				max: (checked)? 24000 : this.model.get('image').bzero || 1000,
				from: this.model.get('options').min,
				to: this.model.get('options').max
			});
		},


		renderImage: function(){
			var imageBuffer = this.preview,
				fits = this.model.toJSON();

			var preview = renderImage(imageBuffer, this.imageScale, this.width, this.height, fits);

			this.context.putImageData(preview, 0, 0);
		},

		initSlider: function(){
			var options = this.model.get('options');
			this.ui.minMax.ionRangeSlider({
				type: 'double',
				min:  0,
				max: this.model.get('image').bzero || 1000,
				from: options.min || 0,
				to: options.max || 1000,
				onChange: this.updateMinMax
			});
		},

		onRender: function(){
			if(this.model.get('imageData')){

				var fits = this.model,
					fitsImage = this.model.get('image');
				
				this.imageScale = 0.2;
				this.width = Math.floor(fitsImage.width * this.imageScale),
				this.height = Math.floor(fitsImage.height * this.imageScale),

				this.$canvas = this.$el.find('canvas');
				this.context = this.$canvas[0].getContext('2d');

				
				if(!fits.get('options')){
					fits.set('options', {
						min: -100,
						max: fitsImage.bzero,
						scaleType: this.ui.scale.val()
					});
				}

				this.$canvas.attr('width', this.width);
				this.$canvas.attr('height', this.height);
				
				this.preview = this.context.createImageData(
					this.width,
					this.height
				);

				_.defer(this.initSlider);

				this.renderImage();

			}
			
		},


		initialize: function(){
			_.bindAll(this, 'updateMinMax', 'updateScale', 'updateFullRange', 'renderImage', 'done', 'initSlider');
		}

	});

	return ScaleView;

});