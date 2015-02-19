<style lang="stylus">

	.thumb {
		width: 54px;
		height: 54px;
		background: #000;
		display: block;
		position: relative;
		margin-bottom: 3px;
		border: 2px solid #222;

		&.active {
			border-color: #4e5d6c;
		}

		img {
			display: block;
		}
	}

</style>

<template>
	<div class="thumb {{isActive}}">
		<div v-if="image.isRendering" class="loader small"></div>
		<img v-if="!image.isRendering" v-attr="src: image.img.thumb.src"/>
	</div>
</template>

<script>

	module.exports = {
		computed: {
			isActive: function(){
				return this.image === this.$root.activeImage ? 'active' : '';
			}
		}
	}

</script>