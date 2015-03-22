require! <[ react ]>

d = react.DOM

header = react.create-factory react.create-class do
	
	display-name: 'header'

	render: ->
		d.nav class-name: 'navbar navbar-default',
			d.div class-name: 'container-fluid',
				d.div class-name: 'navbar-header'
					d.a {class-name: 'navbar-brand', href: '#'}, 'AV'


module.exports = header