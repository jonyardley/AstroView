<load-image>
	<button class="file-upload btn btn-primary btn-lg">
		<input type="file" onchange="{fileSelected}">
		<span>{label}</span>
	</button>


	<script>
		var app = riot.app;
		this.label = opts.data.label;

		this.fileSelected = function(e){
			var file = e.target.files[0];
			app.images.trigger('image:new', {file: file});
		};

	</script>

</load-image>