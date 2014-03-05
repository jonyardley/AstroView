(function($) {
	$.fn.prettyFileInput = function(options) {

		/* TODO
			- Disable in IE7/8
			- Better old IE detect?
			- Figure out best way to hide real file inputs without FOUC
			- Set up and confirm submission
		*/

		if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE")+5, navigator.appVersion.indexOf("MSIE")+6) < 9) {
			console.log("Old IE!");
		}

		this.each(function(i) {
			var fileInput = this;

			var button;

			if (options) {

				// Button text
				if (options.buttonText) {
					button = $("<button class='pretty-file-input'></span>" +options.buttonText+ "</button>");
				}
			}
			// If no options are set
			else {
				button = $("<button class='pretty-file-input'></span>Select a file</button>");
			}

			button.insertAfter(fileInput);

			// IE9
			if (navigator.appName == "Microsoft Internet Explorer") {
				$("input[type='file']").addClass("real-file-input-ie");

				// Set width and height to match pretty button
				$("input[type='file'].real-file-input-ie").each(function() {
					var input = $(this);
					input.width(input.next(".pretty-file-input").width() + 40).height(input.next(".pretty-file-input").height() + 22);
				});
			}
			// The good browsers
			else {
				button.on("click", function(e) {
					e.preventDefault();
					$(this).prev("input[type='file']").click();
				});
			}

			// Display filenames after files are selected
			$(fileInput).on("change", function() {
				handleFiles(this);
			});

			function handleFiles(fileInput, i) {
				var prettyFileInput = $(fileInput).next(".pretty-file-input");
				prettyFileInput.next(".pretty-file-input-filenames").remove();

				/**var prettyFilenames = "<ul class='pretty-file-input-filenames'>";

				// The good browsers
				if (fileInput.files) {
					for (var x = 0; x < fileInput.files.length; x++) {
						prettyFilenames += "<li>" +fileInput.files[x].name+ "</li>";
					}
				}
				// IE9
				else {
					prettyFilenames += "<li>" +fileInput.value.replace("C:\\fakepath\\", "")+ "</li>";
				}

				prettyFilenames += "</ul>";

				$(prettyFilenames).insertAfter(prettyFileInput);**/
			}
		});

	};
})(jQuery);