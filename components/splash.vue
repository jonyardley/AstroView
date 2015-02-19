<style lang="stylus">

	.splash {

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.logo {
			opacity: 0.05;
			width: 180px;
		}

	}

</style>

<template>
	<div class="splash text-center">
		<div class="inner">

			<img class="logo" src="assets/img/logo-white-large.png"/>
			<h1>AstroView</h1>

			<h4>View, compsite & analyse astronomical images in your browser</h4>

			<br/>

			<div class="jumbotron">
				<p>Load an image to get started!</p>
				<div v-component="load-image" v-with="label: 'Load Image'"></div>
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
</template>

<script>

	module.exports = {
		components: {
			'load-image': require('./load-image.vue')
		}
	};
</script>