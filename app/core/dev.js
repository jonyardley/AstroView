var App = require('app');

var files = [
	//'assets/example_fits/656nmos.fits'
];

//add files to the main array!
files.forEach(function(file){
	var model = App.FITS.add({
		file: file
	});
});