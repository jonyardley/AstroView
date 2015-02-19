<style lang="stylus">

	.file-upload {
		position: relative;
		overflow: hidden;
		cursor: pointer !important;

		input {
			cursor: pointer !important;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			opacity: 0.001;
		}
	}

</style>

<template>

	<button class="file-upload btn btn-primary btn-lg">
		<input type="file" v-on="change: fileSelected">
		<span>{{label}}</span>
	</button>

</template>

<script>
	module.exports ={
		methods: {
			fileSelected: function(event){
				var file = event.target.files[0];
				this.$root.addImage({file: file});
			}
		}
	};
</script>