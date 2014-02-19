<h2>Scale Image</h2>

<div class="canvasWrapper">
	<canvas></canvas>
</div>

<div class="imageControls">

	<div class="field">
		<label>Scale function: </label>
		<select id="scale">
			<option value="linear">Linear</option>
			<option value="sqrt">sqrt</option>
			<option value="cuberoot">cuberoot</option>
			<option value="log">log</option>
			<option value="loglog">loglog</option>
			<option value="sqrtlog">sqrtlog</option>
		</select>
	</div>

	<div class="field">
		<input type="text" id="minMax" name="minMax" />
	</div>

	<div class="field">
		<button id="done">Apply <span class="fa fa-check"></span></button>
	</div>
</div>