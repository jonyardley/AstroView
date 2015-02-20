<style lang="stylus">
	@import "/assets/styles/shared";

	#main {
		position: absolute;
		top: 50px;
		left: 60px;
		bottom:0px;
		right: 0;
	}
</style>


<template>
	<div v-component="header"></div>

	<div v-component="splash" v-if="!hasImages"></div>

	<div v-component="sidebar" id="sidebar" v-if="hasImages"></div>

	<div id="main" v-if="hasImages">
		<div v-component="stage"></div>
	</div>
</template>


<script>
	var Image = require('../utils/Image');

	var app = {
		data: {
			mode: 'view',
			images: [],
			activeImage: null
		},
		methods: {
			addImage: addImage
		},
		computed: {
			hasImages: function(){
				return !!this.images.length
			}
		},
		components: {
			'header': require('./header.vue'),
			'splash': require('./splash.vue'),
			'sidebar': require('./sidebar.vue'),
			'stage': require('./stage.vue')
		},
		attached: function(){
			/** DEV **/
			console.log('app ready!');
			this.addImage({file: 'assets/fits/656nmos.fits'});
		}
	};

	function addImage(opts){
		console.log('adding image');
		opts.app = this;
		var image = new Image(opts);
		this.images.push(image);
		this.activeImage = image;
		image.renderCallback = imageRenderedCallback.bind(this);
	}

	function imageRenderedCallback(image){
		this.$broadcast('image:rendered', image);
	}

	module.exports = app;

</script>