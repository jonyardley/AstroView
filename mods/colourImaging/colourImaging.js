define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./layout',
	'./imageItem',
	'./ciTool'
],
function($, _, Backbone, Marionette, App, layoutTmpl, imageItem, ciTool){
	
	return Backbone.Marionette.CompositeView.extend({

		template: layoutTmpl,
		itemView: imageItem,
		itemViewContainer: 'ul',
		tagName: 'div',
		className: 'panel colourImaging',

		onRender: function(){
			_.defer(function(){
				ciTool.init('ciStage');
			});
		}

	});


});