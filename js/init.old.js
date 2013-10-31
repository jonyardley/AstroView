define(['jquery', 'underscore', 'app'], function($, _, App){
	
	$(function(){
		console.log('App Running!!');

		//Prototype stuff
		var imageData, imageArray;

		$('#file').on('change', function(e){
			var file = e.target.files[0];

			var callback = function(fits){

				var header = this.getHeader();
				imageData = this.getDataUnit();
				imageData.getFrame(0, render);

				console.log(header, imageData);

				$('canvas').attr('height', imageData.height);
				$('canvas').attr('width', imageData.width);

				$('#min').val(0);
				$('#max').val(imageData.bzero);


			};

			var fits = new astro.FITS(file, callback);

		});


		var render = function(array){
			imageArray = array;
			update();
		}

		var min, max, type;

		var update = function(){

			var context = $('canvas')[0].getContext('2d');
			canvasImage = context.createImageData(imageData.width, imageData.height);
			min = parseInt($('#min').val(), 10);
			max = parseInt($('#max').val(), 10);
			type = $('#scale').val()
			var i;
			for(i = 0; i<imageArray.length; i++){
				var index = i*4;
				var value = scale(imageArray[i]);

				canvasImage.data[index+0] = value;
			    canvasImage.data[index+1] = value;
			    canvasImage.data[index+2] = value;
			    canvasImage.data[index+3] = 255;
			}

			context.putImageData(canvasImage, 0, 0);
		}

		var scale = function(value){
			var output;
			switch(type){
				case 'linear':
					output = ((value + min) / max) * 255;
					break
				case 'sqrt':
					output = Math.sqrt((value + min) / max ) * 255;
					break
				case 'cuberoot':
					output = Math.pow((value + min) / max, 0.333) * 255;
					break
				case 'log':
					output = Math.log((value + min) / max ) * 255;
					break
				case 'loglog':
					output = Math.log(Math.log((value + min) / max )) * 255;
					break
				case 'sqrtlog':
					output = Math.sqrt(Math.log((value + min) / max )) * 255;
					break
			}

			return output;
		}

		$('#min, #max, #scale').on('change', update);


	});

});