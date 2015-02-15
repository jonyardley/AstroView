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
	</script>
</sidebar>