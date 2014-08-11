var Marionette = require('marionette'),
	_ = require('underscore'),
	App = require('app'),
	Rivets = require('rivets'),
	renderImage = require('../../utils/renderImage'),
	ionSlider = require('ionSlider'),
	spectrum = require('spectrum');

module.exports = Marionette.ItemView.extend({

	template: require('./edit.html'),

	ui: {
		canvas: 'canvas',
		minMax: '#minMax',
		color: '.color'
	},

	modelEvents: {
		'change:loading.state': 'renderImage',
		'change:options.scaleType': 'renderImage'
	},


	canvasHeight: 400,
	canvasWidth: 400,

	updateMinMax: function(e){
		this.model.set('options.min', e.fromNumber);
		this.model.set('options.max', e.toNumber);
		this.model.set('options.maxRaw', e.toRaw);
		this.model.set('options.minRaw', e.fromRaw);
		this.renderImage();
	},

	initSlider: function(){
		var throttledUpdate = _.throttle(this.updateMinMax, 100);
		this.ui.minMax.ionRangeSlider({
			type: 'double',
			min:  0,
			max: 65535,
			from: this.model.get('options.minRaw') || 0,
			to: this.model.get('options.maxRaw') || 65535,
			onChange: throttledUpdate,
			scale: this.nonLinearScale
		});
	},

	nonLinearScale: function(e, invert){

		var s = function(value){
			var c = 1,
				t = value,
				b = 0,
				d = e.max,

				output = c*(t/=d)*(t*t*t) + b;
			output *= d;

			return output;
		};

		e.toRaw = e.toNumber;
		e.fromRaw = e.fromNumber;
		e.toNumber = Math.round(s(e.toNumber));
		e.fromNumber = Math.round(s(e.fromNumber));

		return e;
	},


	onRender: function(){
		Rivets.bind(this.$el, {
			fits: this.model,
			action: {
				apply: this.apply,
				cancel: this.cancel
			}
		});

		this.context = this.ui.canvas[0].getContext('2d');

		this.ui.canvas.attr('width', this.canvasWidth);
		this.ui.canvas.attr('height', this.canvasHeight);

		this.renderImage();

		_.defer(this.initSlider);
		_.defer(this.initColor);
	},

	initColor: function(){
		this.ui.color.spectrum({
			showPalette: true,
			preferredFormat: "hex",
			palette: [
				['white'],
				['red'],
				['green'],
				['blue']
			]
		});
	},


	renderImage: function(){

		if(this.model.get('loading.state') === "complete") {

			var context = this.context;
			var callback = function (img) {
				_.defer(function () {
					context.drawImage(img, 0, 0);
				});
			};

			renderImage({
				fits: this.model.toJSON(),
				width: this.canvasWidth,
				height: this.canvasHeight
			}, callback);
		}

	},

	apply: function(){
		this.model.set('_dirty', true);
		this.model.edit();
	},

	cancel: function(){
		this.model.edit();
		this.model.set('options', this.previousOptions);
	},


	initialize: function(){
		_.bindAll(this, 'renderImage', 'updateMinMax', 'initSlider', 'apply', 'cancel', 'initColor');
		this.previousOptions = _.clone(this.model.get('options'));
	}

});