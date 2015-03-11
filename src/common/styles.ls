require! 'object-assign':assign


vars =
	headerHeight: 40
	sidebarWidth: 60


styles = do

	m: ->
		output = {}

		for arg in arguments
			assign(output, arg) if arg

		output

	vars: vars

	sidebar:
		top: vars.headerHeight
		width: 100
		bottom: 0
		left: 0
		position: 'absolute'


module.exports = styles