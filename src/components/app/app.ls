require! <[
	react
	../sidebar/sidebar.ls
]>

d = react.DOM

app = react.create-class do

	display-name : 'app'

	render: ->

		d.div class-name: 'main-inner',
			sidebar!

module.exports = app