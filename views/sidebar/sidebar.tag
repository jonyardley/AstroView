<sidebar>

	<div id="sidebar">
		<div class="inner">
			<av-thumb each="{images.collection}" data="{this}"/>
		</div>
	</div>

	<!-- CONTROLLER -->
	<script>
		var app = riot.app;
		this.images = app.images;


		console.log(this.images);

		this.images.on('image:loaded image:rendered', function(){
			this.update();
		}.bind(this));
	</script>
</sidebar>