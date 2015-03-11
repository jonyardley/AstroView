require! react:React
require! '../stores/ImageStore.ls'
require! '../actions/ImageActions.ls'

d = React.DOM

getState = ->
	items: ImageStore.getAll!

createItem = !->
	ImageActions.createImage test: 'testing'


App = React.createClass do

	displayName : 'App'
	getInitialState: -> getState!
	onChange: -> @setState getState!
	componentDidMount: -> ImageStore.addChangeListener @onChange
	componentWillUnmount: -> ImageStore.removeChangeListener @onChange

	render: ->
		name = @props.name || \World
		d.div null,
			d.h1 null, "HELLO #name"
			d.button onClick: createItem, "CREATE ITEM"
			d.h2 null, @state.items.length

module.exports = App