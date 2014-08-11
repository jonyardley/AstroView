
function processArray(data, handler, callback) {

	//var start = new Date(); //FOR DEBUGGING!

	var maxtime = 80;		// chunk processing time
	var delay = 20;		// delay between processes
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
			if (callback) {
				//console.log(new Date() - start); //FOR DEBUGGING!
				callback();
			}
		}

	}, delay);
}

module.exports = processArray;
