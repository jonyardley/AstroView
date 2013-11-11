define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./preview',
	'mods/renderImage/renderImage',
	'ionSlider'
], function($, _, Backbone, Marionette, App, tmpl, renderImage, ionSlider){

	var Preview = Backbone.Marionette.ItemView.extend({

		template: tmpl,
		id: 'preview',
		className: 'panel preview',

		ui: {
			minMax: '#minMax',
			scale: '#scale',
			fullRange: '#fullRange'
		},

		events: {
			'change #scale': 'updateScale',
			'click #save': 'savePreview',
			'click #fullRange': 'updateFullRange'
		},

		savePreview: function(e){
			var imageUrl = this.$canvas[0].toDataURL();
			var imageWindow = window.open();
			imageWindow.document.write('<img src="'+imageUrl+'"/>');
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
				max: (checked)? 24000 : this.fits.image.bzero || 1000,
				from: this.model.get('options').min,
				to: this.model.get('options').max
			});
		},


		renderImage: function(){
			var context = this.context,
				imageBuffer = this.preview,
				fits = this.model.toJSON();

			renderImage(context, imageBuffer, this.imageScale, fits);
		},

		onRender: function(){
			var fits = this.model;
			var fitsImage = this.model.get('image');
			this.imageScale = 0.1;

			this.$canvas = this.$el.find('canvas');
			this.context = this.$canvas[0].getContext('2d');

			
			fits.set('options', {
				width: Math.floor(fitsImage.width * this.imageScale),
				height: Math.floor(fitsImage.height * this.imageScale),
				min: 0,
				max: fitsImage.bzero,
				scaleType: this.ui.scale.val()
			});

			this.$canvas.attr('width', fits.get('options').width);
			this.$canvas.attr('height', fits.get('options').height);
			
			this.preview = this.context.createImageData(
				fits.get('options').width,
				fits.get('options').height
			);

			this.renderImage();

			var self = this;
			_.defer(function(){
				self.ui.minMax.ionRangeSlider({
					type: 'double',
					min: -100,
					max: fitsImage.bzero || 1000,
					from: fits.get('options').min || 0,
					to: fitsImage.bzero || 1000,
					onChange: self.updateMinMax
				});
			});
			
		},


		initialize: function(){
			_.bindAll(this, 'updateMinMax', 'updateScale', 'updateFullRange', 'renderImage');
		}

	});

	return Preview;

});