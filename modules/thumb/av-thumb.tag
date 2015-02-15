<av-thumb>

	<div class="thumb">
		<img src="{image.img.thumb.src}"/>
	</div>

	<script>

		this.image = this.opts.data;

		this.image.on('image:rendered', function(){
			this.update();
		}.bind(this));

	</script>
</av-thumb>
