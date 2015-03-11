require! react:React
require! '../stores/ImageStore.ls'
require! '../actions/ImageActions.ls'
require! '../components/imageThumb.ls'
require! '../common/styles.ls'

d = React.DOM

sidebarStyle =
	position: 'absolute'
	background: '#000'
	width: styles.vars.sidebarWidth
	top: styles.vars.headerHeight
	left: 0
	bottom: 0

getState = ->
	images: ImageStore.getAll!

createImage = !->
	ImageActions.createImage test: 'testing'

Sidebar = React.createFactory React.createClass do

	displayName: 'Sidebar'

	getInitialState: -> getState!
	onChange: -> @setState getState!
	componentDidMount: -> ImageStore.addChangeListener @onChange
	componentWillUnmount: -> ImageStore.removeChangeListener @onChange

	render: ->

		d.div {id: 'sidebar' style: sidebarStyle},
			d.h2 null, 'sidebar'
			d.button onClick: createImage, 'ADD IMAGE'
			d.ul null, do
				@state.images |> map (img) ->
					d.li key: img.id,
						imageThumb image: img


module.exports = Sidebar