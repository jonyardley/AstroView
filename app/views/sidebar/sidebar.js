var App = require('app'),
	$ = require('jquery'),
	Rivets = require('rivets'),
	Marionette = require('marionette'),
	addImage = require('../../modules/addImage/addImage');

Rivets.binders.rawhtml = function(el, value) {
	$(el).html($(value).clone());
};


module.exports = Marionette.LayoutView.extend({

	template: require('./sidebar.html'),

	regions: {
		addImage: '.addImageRegion'
	},

	onShow: function(){
		this.addImage.show(new addImage());
	},

	select: function(el, obj){
		var fits = obj.image;
		if(fits.get('isSelected')){
			fits.edit();
		}else{
			fits.select();
		}
	},

	onRender: function(){
		Rivets.bind(this.$el, {
			images: App.FITS,
			select: this.select
		});
	}

});
