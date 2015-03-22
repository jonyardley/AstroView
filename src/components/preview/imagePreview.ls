require! react:React
require! '../../common/globalEvents.ls'

d = React.DOM

# Class
ImagePreview = React.createFactory React.createClass do

	display-name: 'ImagePreview'

	getInitialState: ->
		visible: false,
		image: null

	componentDidMount: ->
		globalEvents.on 'showPreview', @showPreview
		globalEvents.on 'hidePreview', @hidePreview
	
	componentWillUnmount: ->
		globalEvents.off 'showPreview', @showPreview
		globalEvents.off 'hidePreview', @hidePreview

	showPreview: (image) -> @setState { visible: true, image: image }

	hidePreview: -> @setState visible: false

	render: ->
		d.div null, if @state.visible
			d.div onClick: @hidePreview,
				d.div null,
					d.h2 null, 'PREVIEW'
					d.h3 null, 'image-id: ' + @state.image.id


module.exports = ImagePreview
