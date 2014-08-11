var App = require('app'),
	FitsCollection = require('../dataModel/FitsCollection'),
	HeaderView = require('../views/header/header'),
	StageView = require('../views/stage/stage'),
	SidebarView = require('../views/sidebar/sidebar'),
	EditView = require('../views/edit/edit');


//Add App Regions
App.addRegions({
	header: '#header',
	sidebar: '#sidebar',
	edit: '#edit',
	stage: '#stage',
	overlay: '#overlay'
});

App.FITS = new FitsCollection();


App.addInitializer(function(){

	//set up initial views!
	App.header.show(new HeaderView());
	App.stage.show(new StageView());
	App.sidebar.show(new SidebarView());

	//for easier development
	if(window.location.hostname === 'localhost'){
		require('./dev');
	}

});

/** Attach global events **/

App.vent.on('edit:open', function(model){
	App.stage.$el.addClass('isEditing');

	App.edit.show(new EditView({
		model: model
	}));
});

App.vent.on('edit:close', function(model){
	App.stage.$el.removeClass('isEditing');
	//TODO: Might want to close this view?
});


App.vent.on('stage:render', function(model){
	App.vent.trigger('edit:close');
	App.stage.show(new StageView({
		model: model
	}));
});


//Kick off!
App.start();

console.log('--- Application Started ---');
