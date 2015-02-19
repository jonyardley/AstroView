<style lang="stylus">

	.images {
		position: absolute;
		top: 50px;
		left: 0;
		bottom: 0;
		width: 60px;
		background: #000;
		padding: 3px;
	}

</style>

<template>
	<div class="images">
		<div v-repeat="image: images" v-component="thumb" class="image"></div>
	</div>
</template>

<script>
	module.exports = {
		data: function(){
			return {
				images: this.$root.images
			}
		},
		components: {
			'thumb': require('./thumb.vue')
		}
	};
</script>