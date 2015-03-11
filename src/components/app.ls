require! react:React
require! <[
	../stores/ImageStore.ls
	../actions/ImageActions.ls
	../components/sidebar.ls
	../components/header.ls
	../components/imagePreview.ls
	../common/globalEvents.ls
]>

d = React.DOM

App = React.createClass do

	displayName : 'App'

	render: ->

		setTimeout ->
			globalEvents.emit 'showPreview', 'TESTING!'
		, 2000

		d.div id: 'main-inner',
			header!
			sidebar!
			imagePreview!

module.exports = App