<style lang="stylus">

</style>

<template>
	<canvas id="stage"></canvas>
</template>

<script>

	var fabric = require('fabric').fabric,
		$ = require('jquery');

	module.exports = {
		data: function(){
			return {
				context: null
			};
		},
		created: function(){
			this.$on('image:rendered', function(image){
				console.log('image: boom!', image);
			});
		},
		attached: function(){
			var canvasSelector = '#stage';
			var $canvas = $(this.$el).find(canvasSelector);
			var $main = $('#main');

			$canvas.attr('width', $main.width());
			$canvas.attr('height', $main.height());
			this.context = new fabric.Canvas(canvasSelector.replace('#',''));
		}
	}
</script>