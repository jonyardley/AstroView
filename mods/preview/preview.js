define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./preview'
], function($, _, Backbone, Marionette, App, tmpl){

	var Preview = Backbone.Marionette.ItemView.extend({

		template: tmpl,
		id: 'preview',

		ui: {
			max: '#max',
			min: '#min',
			scale: '#scale'
		},

		events: {
			'change #min': 'updateMin',
			'change #max': 'updateMax',
			'change #scale': 'updateScale',
			'click #save': 'savePreview'
		},

		savePreview: function(e){
			var imageUrl = this.$canvas[0].toDataURL();
			var imageWindow = window.open();
			imageWindow.document.write('<img src="'+imageUrl+'"/>');
		},

		updateMin: function(e){
			this.min = e.target.valueAsNumber;
			this.renderPreview();
		},

		updateMax: function(e){
			this.max = e.target.valueAsNumber;
			this.renderPreview();
		},

		updateScale: function(e){
			this.scaleType = e.target.value;
			this.renderPreview();
		},

		scale: function(value){
			var output;
			switch(this.scaleType){
				case 'linear':
					output = ((value + this.min) / this.max) * 255;
					break
				case 'sqrt':
					output = Math.sqrt((value + this.min) / this.max ) * 255;
					break
				case 'cuberoot':
					output = Math.pow((value + this.min) / this.max, 0.333) * 255;
					break
				case 'log':
					output = Math.log((value + this.min) / this.max ) * 255;
					break
				case 'loglog':
					output = Math.log(Math.log((value + this.min) / this.max )) * 255;
					break
				case 'sqrtlog':
					output = Math.sqrt(Math.log((value + this.min) / this.max )) * 255;
					break
			}

			return output;
		},


		renderPreview: function(){
			var fits = this.fits;
			var i, ii;
			for(i=0;i<this.height;i++){
				var x = (i*4) * fits.image.width;
				for(ii=0;ii<this.width;ii++){
					var y = ii * 4;
					var pixel = x+y;
					var index = ((i * this.width) + ii) * 4;
					var value = this.scale(fits.imageData[pixel]);

					this.preview.data[index+0] = value;
			    	this.preview.data[index+1] = value;
			    	this.preview.data[index+2] = value;
			    	this.preview.data[index+3] = 255;

				}
			}

			this.context.putImageData(this.preview, 0, 0);	
		},


		onRender: function(){
			var fits = this.fits = this.model.toJSON();

			this.$canvas = this.$el.find('canvas');
			this.context = this.$canvas[0].getContext('2d');	
			this.width = Math.floor(fits.image.width * 0.25);
			this.height = Math.floor(fits.image.height * 0.25);
			this.$canvas.attr('width', this.width);
			this.$canvas.attr('height', this.height);
			this.preview = this.context.createImageData(this.width, this.height);
			this.min = 0;
			this.max = fits.image.bzero;
			this.ui.min.val(this.min);
			this.ui.max.val(this.max);
			this.scaleType = this.ui.scale.val();
			this.renderPreview();
			
		},

		serializeData: function(){
			return this.model.get('cards');	
		},


		initialize: function(){
			_.bindAll(this, 'updateMin', 'updateMax', 'savePreview', 'updateScale');
		}

	});

	return Preview;

});