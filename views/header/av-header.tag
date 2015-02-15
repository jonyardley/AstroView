<av-header>

	<nav id="header" class="navbar navbar-default">
		<div class="container-fluid">

			<div class="navbar-header">
				<img class="navbar-logo" src="assets/img/logo-white.png"/>
			</div>

			<div class="navbar-header">
				<a class="navbar-brand" href="#">{name}</a>
			</div>


			<ul class="nav navbar-nav navbar-right">
				<div class="btn-group">
					<a each={modes} href="#" onclick="{parent.changeMode}"
					   class="btn btn-default {disabled: disabled} {active: active}">{name}</a>
				</div>
			</ul>

		</div>
	</nav>

	<script>
		var app = riot.app;
		this.name = app.name;
		this.modes = app.modes;

		this.changeMode = function(e){
			app.trigger('mode:change', e.item);
			this.update();
		}.bind(this);

	</script>

</av-header>