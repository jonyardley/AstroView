var App = require('app'),
	Marionette = require('marionette'),
	addImage = require('../../modules/addImage/addImage'),
	ThumbView = require('../../modules/thumb/thumb');


var ThumbsView = Marionette.CollectionView.extend({
	tasgName: 'ul',
	childView: ThumbView
});


module.exports = Marionette.LayoutView.extend({

	template: require('./sidebar.html'),

	regions: {
		addImage: '.addImageRegion',
		thumbs: '.thumbsContainer'
	},

	onShow: function(){
		this.addImage.show(new addImage());
		this.thumbs.show(new ThumbsView({collection: App.FITS}));
	}

});
