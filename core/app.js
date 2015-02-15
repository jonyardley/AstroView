var Images = require('./images');

module.exports = function App (riot){

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

	riot.observable(this);

	function changeMode(mode){
		this.modes.forEach(function(m){
			m.active = (m.name === mode.name);
		});
	}

	this.on('mode:change', changeMode);

};