require! react:React
require! '../actions/ImageActions.ls'

d = React.DOM

ImageThumb = React.createFactory React.createClass do

	display-name: 'thumb'

	removeImage: ->
		ImageActions.deleteImage @props.image

	render: ->
		d.div null,
			d.span null, @props.image.id + ': ' + (if @props.image.isRendered then 'is rendered' else 'loading...')
			d.button onClick: @removeImage, 'REMOVE'

module.exports = ImageThumb
