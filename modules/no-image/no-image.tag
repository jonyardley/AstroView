<no-image>
	<div class="no-image text-center">
		<div class="inner">

			<img class="logo" src="assets/img/logo-white-large.png"/>
			<h1>AstroView</h1>

			<h4>View, compsite & analyse astronomical images in your browser</h4>

			<br/>

			<div class="jumbotron">
				<p>Load an image to get started!</p>
				<load-image data="{this.loadImage}"/>
			</div>

			<div class="info">
				<p>Don't have one? Try one of these:</p>
				<a href="#">Link to image</a><br/>
				<a href="#">Link to another image</a><br/>
			</div>

			<br/>

			<p><a href="http://en.wikipedia.org/wiki/FITS">Learn more about FITS images here</a></p>

		</div>
	</div>

	<script>
		this.loadImage = {
			class: 'no-image',
			label: 'Load Image'
		};

	</script>

</no-image>