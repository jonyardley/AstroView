<av-main>

	<av-header/>

	<div id="main">

		<sidebar/>

		<div id="stage">
			<no-image if="{images.collection.length < 1}"></no-image>
		</div>

	</div>


	<!-- CONTROLLER -->
	<script>
		var app = riot.app;
		this.images = app.images;
		this.images.on('image:new', this.update);
	</script>

</av-main>