<div class="image">
	<div class="canvasWrapper">
		<canvas></canvas>
	</div>
</div>

<div class="controls">
	<div class="field">
		<label>Min: </label>
		<input id="min" type="range" min="0" max="64000" value="0"/>
	</div>

	<div class="field">
		<label>Max: </label>
		<input id="max" type="range" min="0" max="64000"/>
	</div>

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
		<button id="save">Save Preview</button>
	</div>

	<div class="fitsHeader">
		<h3>Image Info</h3>
		<table>
			<tr><td>Object:</td><td>{{OBJECT.value}}</td></tr>
			<tr><td>Date:</td><td>{{DATE.value}}</td></tr>
			<tr><td>User:</td><td>{{USERID.value}}</td></tr>
			<tr><td>RA:</td><td>{{RA.value}}</td></tr>
			<tr><td>DEC:</td><td>{{DEC.value}}</td></tr>
			<tr><td>Exposure Time:</td><td>{{EXPTIME.value}}s</td></tr>
			<tr><td>Filter:</td><td>{{FILTER1.value}}</td></tr>
		</table>
	<div>
</div>