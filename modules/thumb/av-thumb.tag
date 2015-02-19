<av-thumb>

	<div class="thumb">
		<img src="{image.img.thumb.src}" class="{active: isActive}"/>
	</div>

	<script>

		this.image = this.opts.data;
		this.isActive = this.image.parent.active === this.image;

	</script>
</av-thumb>
