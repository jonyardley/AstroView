require! react:React

d = React.DOM

Header = React.createFactory React.createClass do
	
	display-name: 'Header'

	render: ->
		d.nav className: 'navbar navbar-default',
			d.div className: 'container-fluid',
				d.div className: 'navbar-header'
					d.a {className: 'navbar-brand', href: '#'}, 'AV'


/**

<ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>

**/


module.exports = Header