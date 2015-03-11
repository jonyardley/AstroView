require! react:React
require! '../common/globalEvents.ls'

console.log globalEvents

d = React.DOM

previewStyle =
	position: 'absolute'
	top: 0
	bottom: 0
	right: 0
	left: 0
	background: '#000'
	color: '#FFF'

ImagePreview = React.createFactory React.createClass do

	display-name: 'ImagePreview'

	getInitialState: ->
		visible: false

	componentDidMount: ->
		globalEvents.on 'showPreview', @showPreview
		globalEvents.on 'hidePreview', @hidePreview
	
	componentWillUnmount: ->
		globalEvents.off 'showPreview', @showPreview
		globalEvents.off 'hidePreview', @hidePreview

	showPreview: -> @setState visible: true
	hidePreview: -> @setState visible: false

	render: ->
		d.div null, if @state.visible
			d.div { style: previewStyle, onClick: @hidePreview },
				d.h2 null, 'PREVIEW'


module.exports = ImagePreview
