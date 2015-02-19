var Images = require('./images'),
	Stage = require('./stage');

module.exports = function App (riot){

	//Make app an event emitter
	riot.observable(this);

	//Attach public attr and methods
	this.name = 'AstroView';
	this.images = new Images(riot);
	this.modes = [
		{
			name: 'View',
			active: true,
			disabled: false
		},
		{
			name: 'Composite',
			active: false,
			disabled: true
		},
		{
			name: 'Analyse',
			active: false,
			disabled: true
		}
	];

	this.stage = new Stage(this);

	function changeMode(mode){
		this.modes.forEach(function(m){
			m.active = (m.name === mode.name);
		});
	}

	//App level events
	this.on('mode:change', changeMode);

	console.log('---> App: ',this);

};