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
	var Image = require('./image');

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
			'header': require('../components/header.vue'),
			'splash': require('../components/splash.vue'),
			'sidebar': require('../components/sidebar.vue'),
			'stage': require('../components/stage.vue')
		}
	};

	function addImage(opts){
		opts.app = this;
		var image = new Image(opts);
		this.images.push(image);
		this.activeImage = image;
		image.renderCallback = function(i){
			this.$broadcast('image:rendered', i);
		}.bind(this);
	}

	module.exports = app;

</script>