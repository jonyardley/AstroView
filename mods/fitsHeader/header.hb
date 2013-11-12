<div class="tools">
	<h3>Fits Header</h3>
	<button id="back">Back to image</button>
</div>

<table>
	<tr>
		<th>Card</th>
		<th>Value</th>
		<th>Comment</th>
	</tr>
	{{#each header.cards}}
	<tr>
		<td>{{@key}}</td>
		<td>{{#if value}}{{value}}{{else}}---{{/if}}</td>
		<td>{{#if comment}}{{comment}}{{else}}---{{/if}}</td>
	</tr>
	{{/each}}
</table>