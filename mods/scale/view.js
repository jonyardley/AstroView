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
			fullRange: '#fullRange',
			canvas: 'canvas'
		},

		events: {
			'change #scale': 'updateScale',
			'click #done': 'done',
			'click #fullRange': 'updateFullRange',
		},

		done: function(e){
			
			if(this.model.get('options') !== this.previousOptions){
				this.model.set('_dirty', true);
			};

			App.Router.navigate('/',{replace: true, trigger: true});
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

		updateFullRange: function(e){
			var checked = e.target.checked;
			this.ui.minMax.ionRangeSlider("update", {
				max: (checked)? 24000 : this.model.get('image').bzero || 1000,
				from: this.model.get('options').min,
				to: this.model.get('options').max
			});
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
				this.width = Math.floor(fitsImage.width * this.imageScale);
				this.height = Math.floor(fitsImage.height * this.imageScale);

				this.context = this.ui.canvas[0].getContext('2d');

				
				if(!fits.get('options')){
					fits.set('options', {
						min: -100,
						max: fitsImage.bzero,
						scaleType: this.ui.scale.val()
					});
				}

				this.ui.canvas.attr('width', this.width);
				this.ui.canvas.attr('height', this.height);

				_.defer(this.initSlider);

				this.renderImage();

			}
			
		},


		initialize: function(){
			_.bindAll(this, 'updateMinMax', 'updateScale', 'updateFullRange', 'renderImage', 'done', 'initSlider');
			this.previousOptions = _.clone(this.model.get('options'));
		}

	});

	return ScaleView;

});