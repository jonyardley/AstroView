define([], function(){


	function processArray(data, handler, callback) {

		var maxtime = 50;		// chunk processing time
		var delay = 60;		// delay between processes
		var queue = data.concat();	// clone original array

		setTimeout(function() {

			var endtime = +new Date() + maxtime;

			do {
				handler(queue.shift());
			} while (queue.length > 0 && endtime > +new Date());

			if (queue.length > 0) {
				setTimeout(arguments.callee, delay);
			}
			else {
				if (callback) callback();
			}

		}, delay);
	};


	return processArray;

});
